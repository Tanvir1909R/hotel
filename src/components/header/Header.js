import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import { FaUserAlt } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const header = useRef(null);
  const profile = useRef(null)
  const [toggleProfile, setToggleProfile] = useState(true)
  const { user, logOut } = useContext(authContext);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 200){
        header.current.classList.add('headerActive')
      }else{
        header.current.classList.remove('headerActive')
      }
    })
  })

  const handleProfile = ()=>{
    setToggleProfile(!toggleProfile)
  }

  useEffect(()=>{
    if(toggleProfile){
      profile.current.classList.add('d-none')
    }else{
      profile.current.classList.remove('d-none')
    }
  },[toggleProfile])

  const handleLogOut = ()=>{
    logOut()
    .catch(e =>console.log(e.message));

    setToggleProfile(true)
  }
    
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
          <div className="accountSec position-relative">
            {
              user ?
              <div className="d-flex justify-content-center align-items-center">
                <p className="mb-0 me-4">{user?.displayName ? user?.displayName : 'user123'}</p>
                <div onClick={handleProfile} role='button'>
                  {
                    user?.photoURL ?
                    <Image style={{height:"40px"}} src={user?.photoURL} roundedCircle />
                    :
                    <FaUserAlt />
                  }
                </div>
              </div>:
              <>
              <Button style={{marginRight:"20px"}} variant="outline-info"><Link to='/login'>Login</Link></Button>
              <Button variant="outline-danger"><Link to='/register'>Register</Link></Button>
              </>
            }
            <div className="position-absolute bottom-20 start-0 py-3 px-4 bg-black rounded d-none" ref={profile}>
              {
                !user?.displayName ?
                <>
                <input type="text" className="my-2"/>
                <input type="text" className="my-2" />
                <button>Update</button>
                <button onClick={handleLogOut}>Logout</button>
                </>
                :
                <button onClick={handleLogOut}>Logout</button>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
