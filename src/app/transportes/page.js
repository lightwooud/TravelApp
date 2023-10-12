import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/home'
import HotelDetails from '@/components/paquetes/HoteImage'
import Footer from '@/components/footer/Footer'
const page = () => {
  return (
    <div className="flex  flex-col items-center justify-between ">
        
        <Navbar />
        <Home />
            <div>ESTAS EN LA PAGINA DE TRANSPORTES</div>
        <Footer />
    </div>
  )
}

export default page