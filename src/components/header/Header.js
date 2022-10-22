import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const header = useRef(null)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 200){
        header.current.classList.add('headerActive')
      }else{
        header.current.classList.remove('headerActive')
      }
    })
  })
    
  return (
    <header ref={header}>
      <div className="container">
        <div className="headerWrapper">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="logo">
            <img src="./img/logo.webp" alt="" />
          </div>
          <div className="accountSec">
            <Button style={{marginRight:"20px"}} variant="outline-info">Login</Button>
            <Button variant="outline-danger">Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
