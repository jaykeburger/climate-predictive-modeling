import React, { useState } from 'react';
import map from '../../assets/world.svg';
/*import data from '../../../../backend/data/2022-metrics-by-country.csv'*/
import Papa from 'papaparse'

const CO2Emissions = () => {
  // State to store clicked country and its color
  const [clickedCountry, setClickedCountry] = useState(null);

  const mapData = /* Add your SVG map data here */map;
  const countryColors = {
    USA: '#ff0000',
    Canada: '#ff00ff',
    Mexico: '#00ff00',
  };

  /*
  var results = Papa.parse(data);
  console.log(results);
  <p>
    {results}
  </p>
  */
  function setColor(co2_amount) {
    if(co2_amount == 0) { return '#FFFFFF'}
    else if(co2_amount > 0) { return '#FBFCCE' }
    else if(co2_amount > 1000) { return '#EACA78' }
    else if(co2_amount > 2000) { return '#ED9E3F' }
    else if(co2_amount > 3000) { return '#E35700' }
    else if(co2_amount > 6000) { return '#C20000' }
  }


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
          onMouseOver={() => handleCountryClick(country)}
        />
      ))}
    </svg>
  );
};

export default CO2Emissions;