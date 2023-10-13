import Navbar from '@/components/navbar/Navbar'

import Footer from '@/components/footer/Footer'
import SearchTrasnporte from '@/components/search/SearchTrasnporte';

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

};

const footerStyle = {
position: "absolute",
bottom: 0,
left: 0,
right: 0,
zIndex: 1,
background: "white", 
};


const page = () => {
  return (
    <div style={pageStyle}>
    <div style={navbarStyle}>
      <Navbar />
    </div>
    <div style={contentStyle}>
      <SearchTrasnporte />
    </div>
    <div style={footerStyle}>
      <Footer />
    </div>
  </div>
  
  )
}

export default page