/*global google*/
import React,{ useState } from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow, Polyline } from '@react-google-maps/api';

export default function InfoMap2(props) {
    const [activeMarker, setActiveMarker] = useState(null);
    const [mapData,setMapData] = useState(false);
    const [popData,setPopData] = useState(false);
    const [trunkData,setTrunkData] = useState(false);
    const [bwLevel,setBwLevel] = useState(false);

    const style = {
        width : '1800px',
        height : '700px',
        margin : '20px'
    };
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
    const line19 = props.line19.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line20 = props.line20.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line21 = props.line21.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line22 = props.line22.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line23 = props.line23.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line24 = props.line24.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line25 = props.line25.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line26 = props.line26.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line27 = props.line27.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line28 = props.line28.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line29 = props.line29.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line30 = props.line30.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line31 = props.line31.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });
    const line32 = props.line32.map((value)=>{
        return {lat : value.lat,lng : value.lng};
    });

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    /*const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        props.mapData.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };*/

    return (
        <div className="infomap2">
            <div className="kinds">
                <img className="pop" src="nodepop.png" alt="pop" />
                <p>PoP</p>
                <img className="trunk" src="3.png" alt="trunk" />
                <p>ACS Trunk Node</p>
                <img className="wbn" src="2.png" alt="node"/>
                <p>WBN Node</p>
            </div>
            <div className="bandwidthLevel">
                <img className="linestyle" src="color1.png" alt="bw100" />
                <p>Bronze</p>
                <img className="linestyle" src="color2.png" alt="bw200" />
                <p>Silver</p>
                <img className="linestyle" src="color3.png" alt="bw300" />
                <p>Gold</p>
                <img className="linestyle" src="color4.png" alt="bw400"/>
                <p>Platinum</p>
            </div>
            <LoadScript googleMapsApiKey="AIzaSyDevvetng60XedeOqk-qW9TF-XBNQsyxdE">
                <GoogleMap
                    mapContainerStyle={style}
                    center={center}
                    zoom={14}
                    onClick={() => {
                        setActiveMarker(null)
                    }}
                >
                    {
                        props.mapData_s.map((value)=>{
                            //console.log(value);
                            return (
                                <>
                                    <Marker 
                                    position={value}
                                    key={value.num}
                                    icon={
                                        {
                                            url : '2.png',
                                            scaledSize : new google.maps.Size(20,25),
                                        }
                                    }
                                    onClick={() => {handleActiveMarker(value.num)}}
                                    />
                                    {activeMarker === value.num && (
                                        <InfoWindow 
                                            position={{lat : value.lat, lng : value.lng}}
                                            onCloseClick={() => setActiveMarker(null)}
                                        >
                                            <div className="infowindow">
                                                <p className="infoitem info_title">{value.wn_node}</p>
                                                <p className="infoitem">lat : {value.lat}</p>
                                                <p className="infoitem">lng : {value.lng}</p>
                                            </div>
                                        </InfoWindow>
                                        )
                                    }
                                </>
                                )}
                            )
                        })
                    
                    {
                        props.popData_s.map((value)=>{
                            //console.log(value);
                            return(
                                <>
                                    <Marker 
                                    position={value}
                                    key={value.num}
                                    icon={
                                        {
                                            url : 'nodepop.png',
                                            scaledSize : new google.maps.Size(25,30),
                                        }
                                    }
                                    onClick={() => {handleActiveMarker(value.num)}}
                                    />
                                {activeMarker === value.num && (
                                    <InfoWindow 
                                        position={{lat : value.lat, lng : value.lng}}
                                        onCloseClick={() => setActiveMarker(null)}
                                    >
                                        <div className="infowindow">
                                            <p className="infoitem info_title">{value.p_node}</p>
                                            <p className="infoitem">lat : {value.lat}</p>
                                            <p className="infoitem">lng : {value.lng}</p>
                                        </div>
                                    </InfoWindow>)}
                                </>
                            )
                        })
                    }
                    {
                        props.trunk_s.map((value)=>{
                            console.log(value);
                            return(
                                <>
                                    <Marker 
                                    position={value}
                                    key={value.num}
                                    icon={
                                        {
                                            url : '3.png',
                                            scaledSize : new google.maps.Size(25,30)
                                        }
                                    }
                                    onClick={() => {handleActiveMarker(value.num)}}
                                    />
                                    {activeMarker === value.num && (
                                    <InfoWindow 
                                        position={{lat : value.lat, lng : value.lng}}
                                        onCloseClick={() => setActiveMarker(null)}
                                    >
                                        <div className="infowindow">
                                            <p className="infoitem info_title">{value.an_node}</p>
                                            <p className="infoitem">lat : {value.lat}</p>
                                            <p className="infoitem">lng : {value.lng}</p>
                                        </div>
                                    </InfoWindow>)}
                                </>
                            )
                        })
                    }

                    {
                        props.line1.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line1} 
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                            //console.log(value);
                            return (
                                <>
                                    <Polyline 
                                        path={line3} 
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options200}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options200}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                                        options={options200}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line19.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line19} 
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line20.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line20} 
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line21.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line21} 
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line22.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line22} 
                                        options={options200}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line23.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line23} 
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line24.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line24} 
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line25.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line25} 
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line26.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line26} 
                                        options={options200}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line27.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line27} 
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line28.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line28} 
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line29.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line29} 
                                        options={options100}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line30.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line30} 
                                        options={options200}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line31.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line31} 
                                        options={options300}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
                        props.line32.map((value)=>{
                            return (
                                <>
                                    <Polyline 
                                        path={line32} 
                                        options={options400}
                                        //onClick={() => {handleActiveMarker(value.num)}}
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
            
        </div>
    )
}
