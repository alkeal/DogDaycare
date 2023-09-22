import React from 'react'
import {Link} from "react-router-dom";
import BackgroundImage from  "/Users/a/DogDaycare/src/assets/dogbackground.jpeg"
import "./Home.css"

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="headerContainer">
    <div>Dog DayCare Stockholm</div>
    <p>Välkommen till denna sida</p>
    <Link to="/catalog">
    <button> Kolla in våra hundar</button>
    </Link>
    </div>
    </div>
  )
}

export default Home