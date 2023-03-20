import React from 'react';
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
const MyIcon = new L.Icon({
  iconUrl: '/images/pin-single-family.png',
  iconRetinaUrl: '/images/pin-single-family.png',
  iconSize: [50, 64],
  iconAnchor: [25, 64],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});
function MapLocation({ Longitude, Latitude }) {
  const position = [Latitude, Longitude]
  return (
    <>
      {Latitude && Longitude && (<>
        {/* @ts-ignore */}
        <MapContainer data-aos="fade-up" style={{ width: "100%", height: '70vh' }} center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* @ts-ignore */}
          <Marker icon={MyIcon} position={position}>
          </Marker>
        </MapContainer>
      </>)}
      =

    </>
  );
}

export default MapLocation;
// pin-single-family.png