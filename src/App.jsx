import Background from '/Users/a/DogDaycare/src/assets/DD7760CC-A793-44A0-BF02-2A8691F61EA5.jpeg'
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