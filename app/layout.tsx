import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Hafizul Haque',
  description: 'Personal developer portfolio for Hafizul Haque, a professional full stack developer based in Dhaka, Bangladesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-100 dark:selection:bg-gray-800`}>
        {children}
      </body>
    </html>
  )
}
