
import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/home'
import Footer from '@/components/footer/Footer'

export default function App() {
  return (

    <main className="flex  flex-col items-center justify-between ">
        
        <Navbar />
        <Home />
        <Footer />
    </main>
  )
}
