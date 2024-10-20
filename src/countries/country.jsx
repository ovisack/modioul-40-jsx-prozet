
import React, { useState, useEffect } from 'react';

import './box.css'


 const Country = ({ country,handleVisitedCountry }) => {
   console.log(country);
    const {name,flags,population,area} = country ||{};
    console.log(population);
   
   const [visited,setVisited] =useState(true);

   const handleVisited =() => {
      setVisited(!visited);
   }
   console.log(handleVisitedCountry);



   const passWithParams = () =>handleVisitedCountry(country);
   
    return (
        <div className={`box ${visited?"Visited":"noon"}`}>
         
   
           <h1 style={{color:visited? "purple":'wheat'}} >name:{name?.common}</h1> 

           <img src={flags?.png} alt="" />

           <p>Population:{population}</p>
           <p>Area:{area}</p>


          {/* <p><small>Code{cca3}</small></p> */}

           <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button>



           <br/>

           <button>Add Flag</button>
           {/* {Visited ? "visited": "Going"} */}
           <button  onClick={handleVisited }>{visited ? "visited": "Going"} </button>
        {visited ?  'I have  visited this country.':" I want to visited " }
        
        </div>
    );
 };
 
 export default Country;