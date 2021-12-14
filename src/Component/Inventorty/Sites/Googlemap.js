/*global google*/
import React,{ useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from '@react-google-maps/api';

export default function Googlemap({totalLine}) {
    //console.log(totalLine);
    const [activeMarker, setActiveMarker] = useState(null);

    const google = window.google;

    const center = { 
        lat : 37.672481, 
        lng : 128.736743
    };
    const zoom = 14;
    const mapSize = {
        width : '1900px',
        height : '700px',
        margin : '20px'
    };
    
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const bigSize = (marker) =>{
        if(marker === activeMarker){
            return(
                <Marker
                    icon={{scaledSize : new window.google.maps.Size(150,150)}}
                /> 
            )          
        }
    };
    
    const ifmarker = totalLine.map(value=>{
        if(value.p_node){
            return (
                <>
                <Marker 
                    position={value}
                    icon={
                        {
                            url : "nodepop.png",
                            scaledSize: new window.google.maps.Size(20,30)
                        }
                    }
                    onClick={()=>{
                        handleActiveMarker(value.num)
                        bigSize(value.num)
                    }}
                />
                {activeMarker === value.num && (
                    <InfoWindow 
                        position={{lat : value.lat+0.002100 , lng : value.lng}}
                        onCloseClick={() => setActiveMarker(null)}
                    >
                        <div className="infowindow">
                            <p className="infoitem info_title">{value.p_node}</p>
                            <p className="infoitem">lat : {value.lat}</p>
                            <p className="infoitem">lng : {value.lng}</p>
                        </div>
                    </InfoWindow>
                )}
                </>
            )
        }else if(value.an_node){
            return (
                <>
                <Marker 
                    position={value}
                    icon={
                        {
                            url : "3.png",
                            scaledSize: new window.google.maps.Size(20,30)
                        }
                    }
                    onClick={()=>{handleActiveMarker(value.num)}}
                />
                {activeMarker === value.num && (
                    <InfoWindow 
                        position={{lat : value.lat+0.002100 , lng : value.lng}}
                        onCloseClick={() => setActiveMarker(null)}
                    >
                        <div className="infowindow">
                            <p className="infoitem info_title">{value.an_node}</p>
                            <p className="infoitem">lat : {value.lat}</p>
                            <p className="infoitem">lng : {value.lng}</p>
                        </div>
                    </InfoWindow>
                )}
                </>
            )
        }else if(value.wn_node){
            if(value.wn_node === 'WN-T1'){
                return (
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "t2.png",
                                    scaledSize : new window.google.maps.Size(20,30)
                                }
                            }
                            onClick={()=>{handleActiveMarker(value.num)}}
                        />
                        {activeMarker === value.num && (
                            <InfoWindow 
                                position={{lat : value.lat+0.002100 , lng : value.lng}}
                                onCloseClick={() => setActiveMarker(null)}
                            >
                                <div className="infowindow">
                                    <p className="infoitem info_title">{value.wn_node}</p>
                                    <p className="infoitem">lat : {value.lat}</p>
                                    <p className="infoitem">lng : {value.lng}</p>
                                    <p className="infoitem">battery : 75% </p>
                                </div>
                            </InfoWindow>
                        )}
                    </>
                )
            }else if(value.wn_node === 'WN-T2'){
                return(
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "t4.png",
                                    scaledSize : new window.google.maps.Size(20,30)
                                }
                            }
                            onClick={()=>{handleActiveMarker(value.num)}}
                        />
                        {activeMarker === value.num && (
                            <InfoWindow 
                                position={{lat : value.lat+0.002100 , lng : value.lng}}
                                onCloseClick={() => setActiveMarker(null)}
                            >
                                <div className="infowindow">
                                    <p className="infoitem info_title">{value.wn_node}</p>
                                    <p className="infoitem">lat : {value.lat}</p>
                                    <p className="infoitem">lng : {value.lng}</p>
                                    <p className="infoitem">battery : 25% </p>
                                </div>
                            </InfoWindow>
                        )}
                    </>
                );
            }
        }
    });

    const polyLine = totalLine.sort((a,b)=>{
        return a.line - b.line;
    });
    
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

    const bw400 = [];
    const bw300 = [];
    const bw200 = [];
    const bw100 = [];

    const bandWidth = polyLine.map((value,index,arr)=>{
        if(value.bw === 400){
            bw400.push(value);
        }else if(value.bw === 300){
            bw300.push(value);
        }else if(value.bw === 200){
            bw200.push(value);
        }else if(value.bw === 100){
            bw100.push(value);
        }else {
            console.log('Err');
        }
    });

    return (
        <div>
            <div className="info-test">
                <div className="blue info-tt">
                    <img src="t1.png" alt="bt" />
                    <p>100%</p>
                </div>
                <div className="yellow info-tt">
                    <img src="t2.png" alt="bt" />
                    <p>75%</p>
                </div>
                <div className="orange info-tt">
                    <img src="t3.png" alt="bt" />
                    <p>50%</p>
                </div>
                <div className="red info-tt">
                    <img src="t4.png" alt="bt" />
                    <p>25%</p>
                </div>
            </div>
            <LoadScript googleMapsApiKey="AIzaSyDevvetng60XedeOqk-qW9TF-XBNQsyxdE">
                <GoogleMap center={center} zoom={zoom} mapContainerStyle={mapSize} onClick={()=>{handleActiveMarker(null)}}>
                    {totalLine && ifmarker}
                    {
                        bw400.map((value)=>{
                            return (
                                <Polyline path={bw400} options={options400}/>
                            )
                        })
                    }
                    {
                        bw300.map((value)=>{
                            return (
                                <Polyline path={bw300} options={options300}/>
                            )
                        })
                    }
                    {
                        bw200.map((value)=>{
                            return (
                                <Polyline path={bw200} options={options200}/>
                            )
                        })
                    }
                    {
                        bw100.map((value)=>{
                            return (
                                <Polyline path={bw100} options={options100}/>
                            )
                        })
                    }                    
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
