import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import icon from '../images/icon-location.svg'

const MapDisplay = ({latLong}) => {
    const {  lat, lng } = latLong
    const myIcon = L.icon({
        iconUrl: icon,
        iconRetinaUrl: icon,
        iconAnchor: [5, 55],
        popupAnchor: [10, -44],
        iconSize: [45, 55],
    })

    return( 
        <Map center={[ lat, lng ]} zoom={13} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={[ lat, lng ]} icon={myIcon}></Marker>
        </Map>
    )
}

export default MapDisplay;