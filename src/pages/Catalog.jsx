import React from 'react'
import { useState, useEffect} from "react";
import "../pages/Catalog.css"

const apiUrl = "https://api.jsonbin.io/v3/b/651e8cc812a5d37659878397"

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


  <div className="catalog-box">

      
<header className="header-catalog">

<h2>Våra hundar</h2>
</header>

      
         <div className="dogUser-container">
          {userData.map((dog,index)=> (
             <div key={index}>
              <div className="dog-img">
               <img src={dog.img}alt={dog.name}/>
               </div>
         <h5 className="dog-data">Namn: {dog.name}</h5>
         <h5 className="dog-data">Ras: {dog.breed}</h5>
        <div className="more-info">Mer information nedan...</div>
         <div className="dog-owner"> 
         <h5 className="dog-data">Inlämnad : {dog.present}</h5>
         <h5 className="dog-data">Kön: {dog.sex}</h5>
         <h5 className="dog-data">Ålder: {dog.age}</h5>
         <h5 className="dog-data">Registrering : {dog.chipNumber}</h5>
         <h5 className="dog-data">Ägarens förnamn : {dog.owner.name}</h5>
         <h5 className="dog-data">Ägarens efternamn : {dog.owner.lastName}</h5>
            <h5 className="dog-data">Kontakt : {dog.owner.phoneNumber}</h5>
             </div>
         </div>
         )
         )}
       
     </div>
    

  </div>



 );
 


}




export default Catalog;