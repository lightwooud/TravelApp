import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import SearchAlojamientos from '../components/search/SearchAlojamientos';
import Paquetes from '../components/paquetes/Paquetes'


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




const page = () => {
  return (
    
    <div style={pageStyle}>
      <div style={navbarStyle}>
        <Navbar />
      </div>
      
      <div style={contentStyle}>
        <SearchAlojamientos />
        
      </div>
      
    
    
    </div>
    
  )
}

export default page