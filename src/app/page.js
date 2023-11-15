import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'


const pageStyle = {
  position: "relative",
  minHeight: "100vh",
};

const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  background: "white",
};

const contentStyle = {
  marginTop: "100px",
  zIndex: 0,// Agrega espacio en la parte inferior para el footer
};

const footerStyle = {
  position: "relative", // Cambia a position: relative
  zIndex: 1,
  flexShrink: 0,
};

export default function App() {
  return (

    <main className="flex  flex-col items-center justify-between ">
          
   
     
        <Navbar />
          <Home />
        <Footer />
  
    
    
          
        
       
    </main>
  )
}
