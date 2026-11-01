'use client'

import { useEffect, useRef } from 'react'
import { site } from '@/content/site'

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uColor;
uniform sampler2D uDepth;
uniform vec2 uPointer;
uniform vec2 uEyeL;
uniform vec2 uEyeR;
void main() {
  float depth = texture2D(uDepth, vUv).r;
  // Pseudo-3D parallax: nearer pixels (higher depth) move more.
  vec2 uv = vUv + uPointer * 0.025 * (depth - 0.5);
  // Eye tracking: pixels around each eye shift toward the pointer.
  float w = max(smoothstep(0.06, 0.0, distance(vUv, uEyeL)), smoothstep(0.06, 0.0, distance(vUv, uEyeR)));
  uv -= uPointer * 0.012 * w;
  gl_FragColor = texture2D(uColor, clamp(uv, 0.0, 1.0));
}`

function compile(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type)
  if (!shader) throw new Error('Could not create shader')
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? 'Shader compile failed')
  }
  return shader
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Failed to load ${src}`))
    img.src = src
  })
}

function createTexture(gl: WebGLRenderingContext, img: HTMLImageElement, unit: number): WebGLTexture {
  const texture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE0 + unit)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
  return texture as WebGLTexture
}

export function PortraitScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const { portrait } = site
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let frame = 0
    let disposed = false

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
      target.x = Math.max(-1, Math.min(1, x))
      target.y = Math.max(-1, Math.min(1, y))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(canvas.clientWidth * dpr)
      canvas.height = Math.round(canvas.clientHeight * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const start = async () => {
      try {
        const [color, depth] = await Promise.all([loadImage(portrait.src), loadImage(portrait.depthSrc)])
        if (disposed) return

        const program = gl.createProgram()
        if (!program) return
        gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT))
        gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG))
        gl.linkProgram(program)
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Program link failed')
        gl.useProgram(program)

        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
        const aPos = gl.getAttribLocation(program, 'aPos')
        gl.enableVertexAttribArray(aPos)
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

        createTexture(gl, color, 0)
        createTexture(gl, depth, 1)
        gl.uniform1i(gl.getUniformLocation(program, 'uColor'), 0)
        gl.uniform1i(gl.getUniformLocation(program, 'uDepth'), 1)
        const [[lx, ly], [rx, ry]] = portrait.eyes
        gl.uniform2f(gl.getUniformLocation(program, 'uEyeL'), lx, ly)
        gl.uniform2f(gl.getUniformLocation(program, 'uEyeR'), rx, ry)
        const uPointer = gl.getUniformLocation(program, 'uPointer')

        resize()
        window.addEventListener('pointermove', onPointerMove, { passive: true })

        const draw = () => {
          if (disposed) return
          current.x += (target.x - current.x) * 0.08
          current.y += (target.y - current.y) * 0.08
          gl.clearColor(0, 0, 0, 0)
          gl.clear(gl.COLOR_BUFFER_BIT)
          gl.uniform2f(uPointer, current.x, current.y)
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
          frame = requestAnimationFrame(draw)
        }
        draw()
      } catch {
        // WebGL failed. The static <img> stays visible as the fallback.
      }
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    void start()

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
}
