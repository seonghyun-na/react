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
        width : '1600px',
        height : '715px',
        margin : '12px',
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
                            url : "smfipop.png",
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
            if(value.battery === 100){
                return (
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "smfibattery100.png",
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
            }else if(value.battery === 75){
                return(
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "smfibattery75.png",
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
            }else if(value.battery === 50){
                return(
                    <>
                        <Marker 
                            position={value}
                            icon={
                                {
                                    url : "smfibattery50.png",
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

    return (
        <div className='googlemap-container'>
            <div className="googlemap-alert">
                <fieldset className='googlemap-totalfieldset'>
                    <legend className='googlemap-maintitle'>Maker List</legend>
                    <div className="googlemap-style googlemap-networknode">
                        <img className='maker-img' src="smfibattery100.png" alt="Network Node" />
                        <p>WBN Node</p>
                    </div>
                    <div className="googlemap-style googlemap-popnode">
                        <img className='maker-img' src="smfipop.png" alt="Pop Node" />
                        <p>Pop</p>
                    </div>
                    <div className="googlemap-style googlemap-trunknode">
                        <img className='maker-img' src="smfitrunk.png" alt="Trunk Node" />
                        <p>ACS Trunk Node</p>
                    </div>
                </fieldset>
                <fieldset className="googlemap-totalfieldset2">
                    <legend className='googlemap-maintitle'>Battery capacity</legend>
                    <div className="blue info-tt">
                        <img src="smfibattery100.png" alt="100" />
                        <p>100%</p>
                    </div>
                    <div className="yellow info-tt">
                        <img src="smfibattery75.png" alt="75" />
                        <p>75%</p>
                    </div>
                    <div className="orange info-tt">
                        <img src="smfibattery50.png" alt="50" />
                        <p>50%</p>
                    </div>
                    <div className="red info-tt">
                        <img src="smfibattery25.png" alt="25" />
                        <p>25%</p>
                    </div>
                </fieldset>
            </div>
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
