import React from 'react'
import Logo from '../assets/shield-dog-solid.svg'
import {Link} from "react-router-dom"


export default function Navbar(){


return(

<div className="navbar">
  <div className="leftSide">
  

  <img src={Logo} />
</div>

<div className="rightSide">

<Link to="/Home"> Hem </Link>
<Link to="/Catalog"> Katalog</Link>
<Link to="/Info"> Mer information</Link>

</div>


</div>


)



}