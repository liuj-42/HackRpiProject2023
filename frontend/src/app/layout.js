import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MedMind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="children">
        {children}
        </div>
        </body>
    </html>
  )
}
