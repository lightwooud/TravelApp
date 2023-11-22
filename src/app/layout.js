import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'TravelApp',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
     
          {children}
          <Footer />
        </body>
    </html>
  )
}
