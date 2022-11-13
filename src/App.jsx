import { useEffect } from "react";
import { useContext } from "react";
import { Link, Route, Router, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {NavbarContext} from "./context/NavbarContext";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {

  const {setNavbarLinkIndex} = useContext(NavbarContext);

  const location = useLocation();

  useEffect(()=>{

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

  },[location])

  return (
    <>
      <TopOrderMessage>
        We're open and available for takeaway & delivery.
        <Link to="/order" className="order-link" onClick={()=>{
          setNavbarLinkIndex(1);
        }}>  Order Now</Link>
        <div></div>
      </TopOrderMessage>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/order' element = {<Order />} />
        <Route path = '/company' element = {<Company />} />
        <Route path = '/faq' element = {<Faq />} />
        <Route path = '/contact' element = {<Contact />} />
        {/* <Order /> */}
      </Routes>
      <Footer />
    </>
  );
}

const TopOrderMessage = styled.div`
  padding: 10px 0;
  text-align: center;
  color: white;
  position: relative;
  background-color: #35b8be;
  width: 100%;

  .order-link{
    font-weight: 500;
    z-index: 10;
  }

  div{
    position: absolute;
    background-image: url("Assets/ButtonWave.svg");
    background-size: 600px;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    pointer-events: none;
  }
`


export default App;
