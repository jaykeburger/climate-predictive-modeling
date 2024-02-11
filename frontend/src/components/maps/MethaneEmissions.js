import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MethaneEmissions = () => {
  return(
 
            <MapContainer  className="mymap" zoom={this.state.zoom}  scrollWheelZoom={false}>
            <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>  contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
           </MapContainer >
     )
 }

export default MethaneEmissions;