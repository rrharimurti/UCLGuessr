import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
 
const containerStyle = {
  width: '600px',
  height: '450px'
};
 
function MapComponent({ coordinates }) {
  const center = {
    lat: coordinates.Latitude,
    lng: coordinates.Longitude
  };
 
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
 
export default React.memo(MapComponent);