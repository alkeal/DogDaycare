import React from 'react'
const apiUrl = 'https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683'

const button = document.querySelector('#fetch');

function Catalog() {
  return (
    <div className="catalog">Catalog1</div>
    
  )
  
}


button.addEventListener('click', async e =>{

const respone = await fetch(apiUrl);

const dogData = await respone.json();

const dogs = dogData.results;




})

export default Catalog