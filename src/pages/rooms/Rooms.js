import React from 'react'
import { Button } from "react-bootstrap";
import './rooms.css'

const Rooms = () => {
  return (
    <section>
      <div className="roomBanner">
        <h1>luxurious Rooms</h1>
      </div>
      <div className="roomSec">
        <div className="title">
          <p>Featured Rooms</p>
          <h1>Choose a Better Room</h1>
        </div>
        <div className="rooms">
          <div className="room position-relative overflow-hidden">
            <img className='roomImg' src="./img/room-1.webp" alt="" />
            <div className="roomDesc position-absolute d-flex justify-content-between align-items-center w-100">
              <div>
              <p>From $250/night</p>
              <h3 className='fs-1'>Signature Room</h3>
              </div>
              <div>
              <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="room position-relative overflow-hidden">
            <img className='roomImg' src="./img/room-2.webp" alt="" />
            <div className="roomDesc position-absolute d-flex justify-content-between align-items-center w-100">
              <div>
              <p>From $250/night</p>
              <h3 className='fs-1'>Signature Room</h3>
              </div>
              <div>
              <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="room position-relative overflow-hidden">
            <img className='roomImg' src="./img/room-3.webp" alt="" />
            <div className="roomDesc position-absolute d-flex justify-content-between align-items-center w-100">
              <div>
              <p>From $250/night</p>
              <h3 className='fs-1'>Signature Room</h3>
              </div>
              <div>
              <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="room position-relative overflow-hidden">
            <img className='roomImg' src="./img/room-4.webp" alt="" />
            <div className="roomDesc position-absolute d-flex justify-content-between align-items-center w-100">
              <div>
              <p>From $250/night</p>
              <h3 className='fs-1'>Signature Room</h3>
              </div>
              <div>
              <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms