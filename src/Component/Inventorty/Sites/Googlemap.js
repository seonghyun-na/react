/*global google*/
import React,{ useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from '@react-google-maps/api';
import Infotitle from './Infotitle';

export default function Googlemap({totalLine}) {
    //console.log(totalLine);
    const [activeMarker, setActiveMarker] = useState(null);
    const [checkpoint,setCheckPoint] = useState(null);
    useEffect(()=>{
        setCheckPoint();
    },[])
    const google = window.google;

    const center = { 
        lat : 37.672481, 
        lng : 128.736743
    };
    const zoom = 14;
    const mapSize = {
        width : '1800px',
        height : '715px',
        margin : 'auto',
    };
    
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

        
    const ifmarker = totalLine.map(value=>{
        if(value.p_node){
            return (
                <>
                <Marker 
                    position={value}
                    icon={
                        {
                            url : "12.png",
                            scaledSize: new window.google.maps.Size(20,30)
                        }
                    }
                    onClick={()=>{
                        handleActiveMarker(value.num)
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
                            url : "smfitrunk.png",
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
            if(value.battery > 30){
                return (
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "1.png",
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
                                    <p className="infoitem">battery : {value.battery}% </p>
                                </div>
                            </InfoWindow>
                        )}
                    </>
                )
            }else if(value.battery < 30 && value.battery > 10){
                if(value.battery > 30){
                    console.log('Check');
                }else{
                    setCheckPoint(true);
                }
                return(
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "2.png",
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
                                    <p className="infoitem">battery : {value.battery}% </p>
                                </div>
                            </InfoWindow>
                        )}
                    </>
                );
            }else if(value.battery <= 10){
                return(
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "3.png",
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
                                    <p className="infoitem">battery : {value.battery}% </p>
                                </div>
                            </InfoWindow>
                        )}
                    </>
                );
            }else if(value.battery === 25){
                return(
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "smfibattery25.png",
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
                                    <p className="infoitem">battery : {value.battery}% </p>
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

    const closepage = () =>{
        setCheckPoint(null);
    };

    return (
        <div className="googlemap">
            <Infotitle/>
                {checkpoint && (
                    <div className="googlemap-alert">
                        <p>배터리 잔량이 30%이하입니다.</p>
                        <button onClick={closepage}>창 닫기</button>
                    </div>
                    )
                }
                <LoadScript googleMapsApiKey="AIzaSyDevvetng60XedeOqk-qW9TF-XBNQsyxdE">
                    <GoogleMap 
                        center={center} 
                        zoom={zoom} 
                        mapContainerStyle={mapSize} 
                        onClick={()=>{handleActiveMarker(null)}}
                        className="google-map-container"
                    >
                        {totalLine && ifmarker}
                        {
                            bw400.map(()=>{
                                return (
                                    <Polyline path={bw400} options={options400}/>
                                )
                            })
                        }
                        {
                            bw300.map(()=>{
                                return (
                                    <Polyline path={bw300} options={options300}/>
                                )
                            })
                        }
                        {
                            bw200.map(()=>{
                                return (
                                    <Polyline path={bw200} options={options200}/>
                                )
                            })
                        }
                        {
                            bw100.map(()=>{
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
