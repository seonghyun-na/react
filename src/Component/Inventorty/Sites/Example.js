import React from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow, Polyline } from '@react-google-maps/api';

const Example = (props) => {
    const center = {
        lat : 37.666169,
        lng  : 128.710769
    };
    const options400 = {
        strokeColor:'yellowgreen',
        strokeOpacity: 0.75,
        strokeWeight: 8,
    };
    const options300 = {
        strokeColor:'gold',
        strokeOpacity: 0.75,
        strokeWeight: 6,
    };
    const options200 = {
        strokeColor:'gray',
        strokeOpacity: 0.75,
        strokeWeight: 4,
    };
    const options100 = {
        strokeColor:'brown',
        strokeOpacity: 0.75,
        strokeWeight: 2,
    };

    /*const ex1 = props.totalLine.map((value,index,arr)=>{
        if(value.line === 1){
            
            return(
                <Polyline
                    path={value}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 2){
            return(
                <Polyline
                    path={value}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 3){
            return(
                <Polyline
                    path={value}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 4){
            return(
                <Polyline
                    path={value}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 5){
            return(
                <Polyline
                    path={value}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }
    })*/
    const latLng = [
        {line : 2, lat : 37.672481 ,lng : 128.736743},
        {line : 2, lat : 37.679991 ,lng : 128.72379},
        {line : 1, lat : 37.663903 ,lng : 128.69977},
        {line : 1, lat : 37.662187 ,lng : 128.712405},
    ];
    latLng.sort((a,b)=>{
        return a.line - b.line;
    });
    console.log(latLng);
    
    const ex1 = props.totalLine.map((value,index,arr)=>{
        console.log(arr);
    })
    /*const sortedLine = props.totalLine.sort((a,b)=>{
        return a.line - b.line;
    });
    console.log(sortedLine);*/

        return(
        <LoadScript googleMapsApiKey="AIzaSyDevvetng60XedeOqk-qW9TF-XBNQsyxdE">
            <GoogleMap
                mapContainerStyle={{
                    width : '1900px',
                    height : '700px',
                    margin : '20px'
                }}
                center={center}
                zoom={13}
            >
                {
                    props.totalLine.map(value=>{
                        return(
                            <>
                                <Marker
                                    position={value}
                                />
                            </>
                        );
                    })
                }
                
                {
                    /*sortedLine.map((value,index,arr)=>{
                        console.log(value.bw);
                        console.log(arr);
                        return(
                            <Polyline 
                                path={arr}
                                options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                            />
                        );
                    })*/
                }
                {
                    props.totalLine.map((value,index,arr)=>{
                        console.log(arr);
                        return(
                            <Polyline
                                path={arr}
                            />
                        )
                    })
                }
            </GoogleMap>
        </LoadScript>
    );
}

export default Example;