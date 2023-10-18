import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import SearchFlight from '@/components/search/SearchFlight';


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

const page = () => {
  return (
    <div style={pageStyle}>
      <div style={navbarStyle}>
        <Navbar />
      </div>
      <div style={contentStyle}>
        <SearchFlight />
        
      </div>
      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default page;



