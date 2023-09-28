import React from 'react'
import { useState, useEffect} from "react";
import "../pages/Catalog.css"

const apiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"

 function Catalog () {

  
 const [userData, setUserData] = useState({});

 useEffect(() => {

  getDogUserData();

 }, []);

 const getDogUserData = async () => {
   
  const response = await fetch(apiUrl);
  const jsonData = await response.json();
  setUserData(jsonData);



 };

 return (
  
  <div className="Catalog">
      <header className="Header-Catalog">

        <h2>Hundinfo</h2>
      </header>
         <div className="dogUser-container">

         <h5 className="dog-data">{userData.name}</h5>
         <h5 className="dog-data">{userData.sex}</h5>
         <h5 className="dog-data">{userData.breed}</h5>
         <h5 className="dog-data">{userData.img}</h5>
         <h5 className="dog-data">{userData.present}</h5>
         <h5 className="dog-data">{userData.age}</h5>
         <h5 className="dog-data">{userData.chipNumber}</h5>
         <h5 className="dog-data">{userData.owner}</h5>


         </div>



  </div>



 );
 


}




export default Catalog;