import './globals.scss'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
