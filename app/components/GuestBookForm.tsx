"use client"

import { useRef } from "react"
import { postEntry } from "../action"
import { useFormStatus } from "react-dom"

export default function GuestBookForm() {

  const formRef = useRef<HTMLFormElement>(null)
  const { pending } = useFormStatus()

  return (
    <form 
      className="relative flex items-center text-sm mb-5" 
      ref={formRef} 
      style={{ opacity: pending ? 0.7 : 1 }}
      action={
        async (formData) => { 
          await postEntry(formData);
          formRef.current?.reset();
      }}>
      <input
        type="text"
        placeholder="Your message.."
        name="entry"
        required
        disabled={pending}
        autoComplete="off"
        className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"/>
      <button 
        type="submit" 
        className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={pending}>Send</button>
    </form>
  )
}
