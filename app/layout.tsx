import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from './components/Navbar'
import { Provider } from './components/Provider'

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
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-100 dark:selection:bg-gray-800`}>
        <Provider>
          <Navbar/>
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
