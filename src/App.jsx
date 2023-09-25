
import "./App.css"
import "./components/Footer.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"



export default function App() {

      
return (


<div className="app">
   <Router>

<Navbar />

<Routes>
<Route path="/home" exact element={<Home/>}/>
<Route path="/catalog" exact element={<Catalog/>}/>


</Routes>

<Footer />


</Router>
</div>


)











}