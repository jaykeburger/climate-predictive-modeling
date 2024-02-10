import React, { useState } from 'react';
import map from '../../assets/world.svg';

const Map = () => {
  // State to store clicked country and its color
  const [clickedCountry, setClickedCountry] = useState(null);

  // Define your base SVG map data
  const mapData = /* Add your SVG map data here */map;

  // Define country colors (example)
  const countryColors = {
    USA: '#ff0000',
    Canada: '#ff00ff',
    Mexico: '#00ff00',
    // ... add more countries
  };

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