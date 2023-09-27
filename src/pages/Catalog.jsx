import React from 'react'
import { useState, useEffect} from "react";
const apiUrl = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683'

const [dogs, setDogs] = useState(0)


function Catalog() {

  useEffect(() => {

  const fetchData = async () => {

    const result = await fetch(apiUrl)
      result.json().then(json => {
        setDogs(json.current.name)
      }

      )
  }

 fetchData();

  },[] )

  return (
    <div className="catalog">Katalog</div>
    
  )
  
}




export default Catalog