import React from "react";

function Hero(props) {
  return (
         <div className="container">

         <div className="hero-img-container">
            <img className="hero-img" src={`../images/${props.imageUrl}`}  alt="..." />   
         </div>

           <div className="hero-text">
                <div className="hero-top-text">
                <img className="hero-location" src="../images/Fill 220.svg" alt=".." />
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google maps</a>
                </div>
            <h1>{props.title}</h1>
            <p className="Date">{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
            
            
           </div>
           

         </div>
  );
}

export default Hero;




// {'../images/${props.imgUrl}'}


/* <div className="container">
<div className="hero-container">
  <img className="hero-img" src="../images/fuji.jfif" alt="..." />
  <div className="hero-text">
    <div className="hero-text-top-text">
      <img
        className="hero-location"
        src="../images/Fill 220.svg"
        alt=".."
      />
      <p>J A P A N</p>
      <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
      View on Google maps
      </a>
    </div>

    <h1>Mount Fuji</h1>
    <p>12 Jan, 2021 - 24 Jan, 2021 </p>
    <p>
      Mount Fuji is the tallest mountain in Japan, standing at 3,776
      meters (12,380 feet). Mount Fuji is the single most popular tourist
      site in Japan, for both Japanese and foreign tourists.
    </p>
  </div>
</div>
</div> */