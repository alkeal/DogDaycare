import Background from "/Users/a/DogDaycare/src/assets/dogbackground.jpeg"
import "./styles.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Info from "./pages/Info"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"
import './App.css'



export default function App() {

      
return (


<div className="App">
   <Router>

<Navbar />

<Routes>

 <Route path="/" exact component={Home}/>

</Routes>
<img src={Background}/>
</Router>
</div>


)











}