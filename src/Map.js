import React, { Component } from 'react';
import './Map.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// Get this from mapbox:
const accessToken = 'pk.eyJ1IjoieDNsdCIsImEiOiJjamdrc25lYWIwdnNkMndwMnMyMHJnejVtIn0.lwzJZswqjjPUwTjUdZRZcg'

export default class MapContainer extends Component {

    render () {
        const tiles = 
        `  https://api.tiles.mapbox.com/v4/{mapbox.streets}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoieDNsdCIsImEiOiJjamdrc25lYWIwdnNkMndwMnMyMHJnejVtIn0.lwzJZswqjjPUwTjUdZRZcg} `
     

        const attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'


        const mapCenter = [39.9528, -75.1638];
        const zoomLevel = 12;
    

        return (
            <div>
                <h3>Test</h3>
                <Map
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={attribution}
                        url={tiles}
                    />
                </Map>
            </div>

        )
    }
}