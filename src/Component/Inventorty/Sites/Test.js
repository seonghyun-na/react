import React, { Component } from 'react';
import { GoogleMap, Marker } from "google-maps-react"

class Test extends Component {
    render() {
        const MyMapComponent = (props) => {
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
            </GoogleMap>
        }
        return (
            <div>
                <MyMapComponent isMarkerShown />// Map with a Marker
                <MyMapComponent isMarkerShown={false} />// Just only Map
            </div>
        );
    }
}

export default Test;