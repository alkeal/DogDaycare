import React from 'react'
import {Link} from "react-router-dom";
import BackgroundImage from  "../assets/dogbackground.jpeg"
import "../pages/Home.css"

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="headerContainer">
    <h1>Dog DayCare Stockholm</h1>
    <p>Välkommen till denna sida</p>
    <Link to="/catalog">
    <button> Kolla in våra hundar</button>
    </Link>
    </div>
    </div>
    
  )
}

export default Home