import Logo from '/Users/a/DogDaycare/src/assets/Dog_Daycare-removebg-preview.png'
import {Link} from "react-router-dom"
import React, { useState } from 'react'
import './Navbar.css'


export default function Navbar(){

  

return(
  <div className="navbar">
    <div className="leftSide">
      <img src={Logo}/>
      <div className="hiddenLinks">

      <Link to="/">Hem</Link>

<Link to="/Catalog">Katalog</Link>

<Link to="/Info">Mer information</Link>


      </div>
     </div>

     <div className="rightSide">

        <Link to="/">Hem</Link>

        <Link to="/Catalog">Katalog</Link>

        <Link to="/Info">Mer information</Link>
          <button>

            
          
          </button>
        
     </div>





  </div>

)



}