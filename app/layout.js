import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lua Lab - Innovative Research and Development',
  description: 'Lua Lab is a leading research and development company specializing in innovative solutions and cutting-edge technology. Explore our projects, research papers, and technological breakthroughs.',
  keywords: ['Lua Lab', 'research and development', 'innovation', 'technology', 'research papers', 'scientific projects'],
  openGraph: {
    title: 'Lua Lab - Innovative Research and Development',
    description: 'Leading research and development company specializing in innovative solutions and cutting-edge technology.',
    url: 'https://lualab.com',
    siteName: 'Lua Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lua Lab Research and Development'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lua Lab - Innovative Research and Development',
    description: 'Leading research and development company specializing in innovative solutions and cutting-edge technology.',
    images: ['/og-image.jpg'],
  },
}

const nextConfig = {
  images: {
    domains: ['dev.lulabs.cn'], // 如果有外部图片源
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lualab.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
