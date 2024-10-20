import { useEffect } from "react";
import { useState } from "react";

import Country from "./country";
import './continar.css'






const Countries=()=>{
    const  [countries,setCountries] = useState([]);
const [visitedCountry,setVisitedCountry]= useState([])


useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
.then(res=> res.json())
    .then(data=>setCountries(data))

},[]);
console.log(countries);

const handleVisitedCountry = country =>{
   console.log('add to visited country');

   

  const newVisitedCountries = [...visitedCountry, country];
  setVisitedCountry(newVisitedCountries);

}


const handleFlags= flag =>{

console.log(" flag  adding");
}
    return(
        <div >
<h1>Countries:{countries.length}</h1>

<div className="visited">
    <h2 > visited countries:{visitedCountry.length}</h2>
    <ul>{
        visitedCountry.map(country => <li key={country.cca3}> {country.name.common}</li>)
        
        }</ul>
</div>

<div className="flag-container">s

    {
      visitedCountry.map((flag, idx)=> <img key={idx} src ={flag}></img>)  
    }
</div>

<div className="country-container">
{
countries.map(country =><Country 
    key={country.cca3} 

    handleVisitedCountry={handleVisitedCountry}
    country={country}></Country>)

}
</div>
        </div>
    )

}


export default Countries;





