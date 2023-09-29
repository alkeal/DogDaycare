import React from 'react'
import { useState, useEffect} from "react";
import "../pages/Catalog.css"

const apiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"

 function Catalog () {

  
 const [userData, setUserData] = useState([]);

 useEffect(() => {

  getDogUserData().catch((error) => {
    console.error('tjo hej', error)
  });
  

 }, []);

 const getDogUserData = async () => {
   
  const response = await fetch(apiUrl);
  const jsonData = await response.json();
  setUserData(jsonData.record);
  


 };

 return (
  
  <div className="Catalog">
      <header className="Header-Catalog">

        <h2>Hundinfo</h2>
      </header>
         <div className="dogUser-container">
          {userData.map((dog,index)=> (
             <div key={index}>
               <img src={dog.img}alt={dog.name}/>
         <h5 className="dog-data">{dog.name}</h5>
         <h5 className="dog-data">{dog.sex}</h5>
         <h5 className="dog-data">{dog.breed}</h5>
         <h5 className="dog-data">{dog.present}</h5>
         <h5 className="dog-data">{dog.age}</h5>
         <h5 className="dog-data">{dog.chipNumber}</h5>
         <h5 className="dog-data">{dog.owner.name}</h5>
         <h5 className="dog-data">{dog.owner.lastName}</h5>
            <h5 className="dog-data">{dog.owner.phoneNumber}</h5>

         </div>
         )
         )}
       
     </div>
    

  </div>



 );
 


}




export default Catalog;