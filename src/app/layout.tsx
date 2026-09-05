import NavBar from './components/Nav/NavBar'
import ToasterContext from './components/ToasterContext'
import Loader from './components/Loader'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alejandra Coeto',
  description: 'Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth scroll-pt-24 bg-custom-dark-gray'>
      <body className={inter.className}>
        <Loader />
        {children}
        <NavBar >
          <ToasterContext />
        </NavBar>
      </body>
    </html >
  )
}
