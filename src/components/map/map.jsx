import React, { Component } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';
import CustomMarkerIcon from '../../assets/images/icon-location.png';
import 'leaflet/dist/leaflet.css';
import'./map.scss'
import { IPInfoContext } from '../../contexts/ip-info.jsx';

/**
 * This function refreshes the map to new coordinates upon changing 
 * 
 * @param {Object} coordinates - Coordinates we want the map to refresh to 
 */
function MapCoordinatesRefresher(coordinates) {
    const mapCoordinates = coordinates.coordinates;
    const map = useMap();
    map.setView([mapCoordinates.latitude, mapCoordinates.longitude], 13);
}

/**
 * Renders a map
 */
class MapComponent extends Component {
    constructor() {
        super();

        // Creating a custom icon that matches the one on the design
        this.customIcon = new Icon({
            iconUrl: CustomMarkerIcon,
            iconSize: [46, 56],
            iconAnchor: [16, 32],
        });
    }

    render() {
        const { ipData } = this.context;

        return (
            <MapContainer className='map-conponent' center={[ipData.coordinates.latitude, ipData.coordinates.longitude]} zoom={13} scrollWheelZoom={false}>
                <MapCoordinatesRefresher coordinates={ipData.coordinates}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[ipData.coordinates.latitude, ipData.coordinates.longitude]} icon={this.customIcon}></Marker>
            </MapContainer>
        );
    }
}

MapComponent.contextType = IPInfoContext;

export default MapComponent;