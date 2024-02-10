import React, { useState } from 'react';
import map from '../../assets/world.svg';
import data from '../../../../backend/data/2022-metrics-by-country.csv'

const Map = () => {
  // State to store clicked country and its color
  const [clickedCountry, setClickedCountry] = useState(null);

  const mapData = /* Add your SVG map data here */map;
  const countryColors = {
    USA: '#ff0000',
    Canada: '#ff00ff',
    Mexico: '#00ff00',
  };

  /*
  function setColor(co2_amount) {
    if(co2_amount == 0) {}
    else if(co2_amount > 0) { #FBFCCE }
    else if(co2_amount > 1000) { #EACA78 }
    else if(co2_amount > 2000) { #ED9E3F }
    else if(co2_amount > 3000) { #E35700 }
    else if(co2_amount > 6000) { #C20000 }
  }
*/

  // Handle country click event
  const handleCountryClick = (country) => {
    const newColor = countryColors[country] || 'lightblue'; // Default color
    setClickedCountry({ country, color: newColor });
  };

  return (
    <svg viewBox="0 0 800 600" {...mapData}>
      {/* Render all countries */}
      {Object.keys(mapData.paths).map((country) => (
        <path
          key={country}
          d={mapData.paths[country]}
          fill={
            clickedCountry?.country === country
              ? clickedCountry.color
              : '#ccc'
          }
          onClick={() => handleCountryClick(country)}
        />
      ))}
    </svg>
  );
};

export default Map;