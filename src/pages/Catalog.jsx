import React from 'react'
import { useState, useEffect} from "react";



function Catalog() {

  function loadCatalog(){

   fetch("https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683")
     .then((response) => response.json())
     .then((data) => {
      setCatalog([...catalogs, data])
     }

  )}
  const [catalogs, setCatalog] = useState([]);
  useEffect(() =>  {
      loadCatalog();
  }, []);


  return (
    <div>
   <ul>
    {catalogs.map((record) => {
       return <li key={record.key}>{record.lastName}</li>

        } 
      )}
    
   </ul>
 </div>
    
  )
  
}




export default Catalog