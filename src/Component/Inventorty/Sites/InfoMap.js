/*global google*/
import React,{ useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker, Polyline} from '@react-google-maps/api';
import Infotitle from "./Infotitle";

export default function InfoMap(props){
    const [activeMarker, setActiveMarker] = useState(null);
    const [mapData,setMapData] = useState(false);
    const [popData,setPopData] = useState(false);
    const [trunkData,setTrunkData] = useState(false);
    const [bwLevel,setBwLevel] = useState(false);

    /* Data 추출 */
    const line1 = props.line1.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line2 = props.line2.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line3 = props.line3.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line4 = props.line4.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line5 = props.line5.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line6 = props.line6.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line7 = props.line7.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line8 = props.line8.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line9 = props.line9.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line10 = props.line10.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line11 = props.line11.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line12 = props.line12.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line13 = props.line13.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line14 = props.line14.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line15 = props.line15.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line16 = props.line16.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line17 = props.line17.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line18 = props.line18.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });

    /* google map stlye */
    const style = {
        width : '1800px',
        height : '700px',
        margin : '20px',
    };

    /* google map 첫 화면 */
    const center = {
        lat : -4.39636,
        lng : 15.31693
    };

    /* InfoWindow style */
    const canvas = {
        background : '#fff',
        padding: 10
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
    
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    return (
        <>
        <div className="infomap">
            <div className="infomap-container">
                <Infotitle/>
            <LoadScript googleMapsApiKey="AIzaSyDevvetng60XedeOqk-qW9TF-XBNQsyxdE">
                <GoogleMap
                    mapContainerStyle={style}
                    center={center}
                    zoom={12}
                    onClick={() => {
                        setActiveMarker(null)
                        setBwLevel(false);
                    }}
                >
                    {
                        props.mapData.map((value)=>{
                            //console.log(value)
                            return (
                                <>
                                    <Marker 
                                        position={value}
                                        key={value.num}
                                        icon={
                                            {
                                                url : 'smfinode.png',
                                                scaledSize : new google.maps.Size(20,25),
                                            }
                                        }
                                        onMouseOver={() => {handleActiveMarker(value.num)}}
                                        onClick={()=>{setMapData(!mapData)}}
                                        />
                                        {activeMarker === value.num && (
                                            <InfoWindow 
                                                position={{lat : value.lat+0.005100 , lng : value.lng+0.000010}}
                                                onCloseClick={() => setActiveMarker(null)}
                                            >
                                                <div className="infomap-infowindow">
                                                    <p className="infomap-infoitem infomap-info-title">{value.nw_node}</p>
                                                    <p className="infomap-infoitem">lat : {value.lat}</p>
                                                    <p className="infomap-infoitem">lng : {value.lng}</p>
                                                </div>
                                            </InfoWindow>
                                        )}
                                    </>
                                )
                            })
                        }
                        {
                            props.popData.map((value)=>{
                                return (
                                    <>
                                        <Marker 
                                            position={{lat : value.lat , lng : value.lng}}
                                            icon={
                                                {
                                                    url : 'smfipop.png',
                                                    scaledSize : new google.maps.Size(25,30),
                                                }
                                            }
                                            onMouseOver={() => {handleActiveMarker(value.num)}}
                                            onClick={()=>{setPopData(!popData);}}
                                        />
                                        {activeMarker === value.num && (
                                            <InfoWindow 
                                                position={{lat : value.lat+0.005100 , lng : value.lng+0.000010}}
                                                onCloseClick={() => setActiveMarker(null)}
                                            >
                                                <div className="infomap-infowindow">
                                                    <p className="infomap-infoitem infomap-info-title">{value.p_node}</p>
                                                    <p className="infomap-infoitem">lat : {value.lat}</p>
                                                    <p className="infomap-infoitem">lng : {value.lng}</p>
                                                </div>
                                            </InfoWindow>
                                        )}
                                    </>
                                );
                            })
                        }
                        {
                            props.trunk.map((value)=>{
                                return (
                                    <>
                                        <Marker 
                                            position={{lat : value.lat , lng : value.lng}}
                                            icon={
                                                {
                                                    url : 'smfitrunk.png',
                                                    scaledSize : new google.maps.Size(25,30),
                                                }
                                            }
                                            onMouseOver={() => {handleActiveMarker(value.num)}}
                                            onClick={()=>{setTrunkData(!trunkData);}}
                                            
                                        />
                                        {activeMarker === value.num && (
                                            <InfoWindow 
                                            position={{lat : value.lat+0.005100 , lng : value.lng+0.000010}}
                                            onCloseClick={() => setActiveMarker(null)}
                                            >
                                                <div className="infomap-infowindow">
                                                    <p className="infomap-infoitem infomap-info-title">{value.an_node}</p>
                                                    <p className="infomap-infoitem">lat : {value.lat}</p>
                                                    <p className="infomap-infoitem">lng : {value.lng}</p>
                                                </div>
                                            </InfoWindow>
                                        )}
                                    </>
                                );
                            })
                        }

                        {
                            props.line1.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line1} 
                                            options={options100}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line2.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line2} 
                                            options={options200}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line3.map((value)=>{
                                console.log(value);
                                return (
                                    <>
                                        <Polyline 
                                            path={line3} 
                                            options={options300}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line4.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line4} 
                                            options={options100}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line5.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line5} 
                                            options={options200}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line6.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line6} 
                                            options={options300}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line7.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line7} 
                                            options={options100}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line8.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line8} 
                                            options={options200}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line9.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line9} 
                                            options={options300}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line10.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line10}
                                            options={options100}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line11.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line11} 
                                            options={options200}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line12.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line12} 
                                            options={options300}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line13.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line13} 
                                            options={options100}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line14.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line14} 
                                            options={options200}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line15.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line15} 
                                            options={options300}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line16.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line16} 
                                            options={options100}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line17.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line17} 
                                            options={options200}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                        {
                            props.line18.map((value)=>{
                                return (
                                    <>
                                        <Polyline 
                                            path={line18} 
                                            options={options300}
                                            onClick={() => {handleActiveMarker(value.num)}}
                                        />
                                        {/*activeMarker === value.num && (
                                            <InfoWindow position={value}>
                                                <p>{value.bw}</p>
                                            </InfoWindow>
                                        )*/}
                                    </>
                                );
                            })
                        }
                    </GoogleMap>
                </LoadScript>
                {/*<div className="node_list">
                    <div className="node_items">
                        {mapData && ( 
                            props.mapData.map(value=>{
                                return (
                                    <div className="list">
                                        <h1> {value.num} . {value.nw_node}</h1>
                                        <p> line : {value.line}</p>
                                        <p>lat : {value.lat}, lng : {value.lng}</p>
                                        <p>bw : {value.bw}</p>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    {popData && (
                        <h1>infowWindowpolyline2</h1>
                    )}
                    {trunkData && (
                        <h1>infowWindowpolyline1</h1>
                    )}
                    </div>*/}
                
            </div>
        </div>
        </>
    );
}