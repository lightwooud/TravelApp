import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import SearchFlight from '@/components/search/SearchFlight'

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
background: "white", // Cambia el fondo según tus necesidades
};

const contentStyle = {
marginTop: "100px", // Ajusta el valor según la altura del Navbar

};

const footerStyle = {
position: "absolute",
bottom: 0,
left: 0,
right: 0,
zIndex: 1,
background: "white", // Cambia el fondo según tus necesidades
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
  )
}

export default page