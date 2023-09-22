import Logo from '/Users/a/DogDaycare/src/assets/Dog_Daycare-removebg-preview.png'
import {Link} from "react-router-dom"
import React, { useState } from 'react'
import './Navbar.css'


export default function Navbar(){

  const [openLinks, setOpenLinks] = useState(false)

return(
  <div className="navbar">
    <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img src={Logo}/>
      <div className="hiddenLinks">

      <Link to="/Home">Hem</Link>

<Link to="/Catalog">Katalog</Link>

<Link to="/Info">Mer information</Link>


      </div>
     </div>

     <div className="rightSide">

        <Link to="/Home">Hem</Link>

        <Link to="/Catalog">Katalog</Link>

        <Link to="/Info">Mer information</Link>
          <button>

          
          </button>
        
     </div>





  </div>

)



}