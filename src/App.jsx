import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import data from "./data";

function App() {
 
  const card = data.map(item => {
    return(
     
        <Hero
          
          key = {item.id}
          {...item}

        />


  )})





  return (
    <div>
      <Navbar />
      {card}
    </div>
  );
}

export default App;
