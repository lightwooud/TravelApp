import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/home'

export default function App() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-20">
        
        <Navbar />
        <Home />
       

    </main>
  )
}
