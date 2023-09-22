import Background from "/Users/a/DogDaycare/src/assets/dogbackground.jpeg"
import "./App.css"
import "./components/Footer.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"



export default function App() {

      
return (


<div className="App">
   <Router>

<Navbar />

<Routes>
<Route path="/" exact component={Home}/>


</Routes>
<Home />
<Footer />


</Router>
</div>


)











}