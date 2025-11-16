import type { Metadata } from 'next'
import { Courier_Prime, Special_Elite, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Sidebar from './Sidebar' // Import the Sidebar component

const courierPrime = Courier_Prime({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-sans'
});

const specialElite = Special_Elite({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-mono'
});

const caveat = Caveat({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-handwriting'
});

export const metadata: Metadata = {
  title: 'Your Name | Personal Website',
  description: 'A personal blog and newsletter with a retro Neo-Brutalism vibe',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${courierPrime.variable} ${specialElite.variable} ${caveat.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto flex gap-4">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
