import Logo from '../assets/shield-dog-solid.svg'
import {Link} from "react-router-dom"
import React, { useState } from 'react'

export default function Navbar(){

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

return(
<>
<div className="navbar">
  <div className="navbar-container">
  
  <Link to="/" className="navbar-logo">
    DogDaycare <i className="fa-solid fa-shield-dog"/>
    </Link>
  
  <div className="fa-solid fa-bars" onClick={handleClick}>

    <i className={click ? "fas fa-times" : "fas fa-bar"}/>



  </div>

 <ul className={click ? "nav-menu active" : "nav-menu"}>


 </ul>


</div>


</div>

</>
)



}