import React from 'react'
import {Link} from "react-router-dom";
import BackgroundImage from  "../assets/dogbackground.jpeg"
import "../pages/Home.css"

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="headerContainer">
    <h1><span>Dog</span> DayCare Stockholm</h1>
    <p>Välkommen till denna sida<span>.</span></p>
    <Link to="/catalog">
    <button> Kolla in våra hundar</button>
    </Link>
    
    </div>
    <Link to="/info">
    <button className="btn-info"> Eller läs mer om oss här</button>
    </Link>
    </div>
    
  )
}

export default Home