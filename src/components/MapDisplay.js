import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

const MapDisplay = ({latLong}) => {
    const {  lat, lng } = latLong

    return( 
        <Map center={[ lat, lng ]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={[ lat, lng ]}></Marker>
        </Map>
    )
}

export default MapDisplay;