/*global google*/
import React,{ useState } from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow, Polyline } from '@react-google-maps/api';
export default function Testmap(props) {
    console.log(props.totalLine);
    const [activeMarker, setActiveMarker] = useState(null);

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

    const arry1 = [];

    (function funcc() {
        for(let i = 1; i<props.totalLine.length; i++){
            props.totalLine.map((value,index,arr)=>{
                switch(i){
                    case value.line : 
                        arry1.push(value);
                }
            })
        }
    }());
    
    const boxline1 = [];
    const boxline2 = [];
    const boxline3 = [];
    const boxline4 = [];
    const boxline5 = [];

    const linebw2 = arry1.map((value,index,arr)=>{
        if(value.line === 1){
            //console.log(`line number : 1(T1 - POP)`);
            //console.log(value);
            boxline1.push(value);
            return (
                <Polyline
                    path={boxline1}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 2){
            //console.log(`line number : 2(POP - ACS)`);
            //console.log(value);
            boxline2.push(value);
            return (
                <Polyline
                    path={boxline2}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 3){
            //console.log(`line number : 3(T2 - POP)`);
            //console.log(value);
            boxline3.push(value);
            return (
                <Polyline
                    path={boxline3}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 4){
            //console.log(`line number : 4(T1 - ACS)`);
            //console.log(value);
            boxline4.push(value);
            return (
                <Polyline
                    path={boxline4}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }else if(value.line === 5){
            //console.log(`line number : 4(T1 - ACS)`);
            //console.log(value);
            boxline5.push(value);
            return (
                <Polyline
                    path={boxline5}
                    options={value.bw === 400 ? options400 : value.bw === 300 ? options300 : value.bw === 200 ? options200 : options100}
                />
            )
        }
    })
    /*const linebw = arry1.filter((value,index,arr)=>{
        //console.log(value);
        return {lat : value.lat , lng : value.lng }
    }).map((value,index,arr)=>{
        switch(value.bw){
            case 400 : 
                return(
                <Polyline
                    path={[arr[index],arr[index+1]]}
                    options={value.bw === 400 ? options400 : console.log('ERR')}
                />)
            case 300 : 
                return(
                <Polyline
                    path={[arr[index],arr[index+3]]}
                    options={options300}
                />)
            case 200 : 
                return(
                <Polyline
                    path={[arr[index],arr[index+1]]}
                    options={options200}
                />)
            case 100 : 
                return(
                <Polyline
                    path={[arr[index],arr[index+3]]}
                    options={value.bw === 100 ? options100 : console.log('ERR')}
                />)
        }
    });*/
    
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
    const google = window.google;
    
    return (
        <div>
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
                    mapContainerStyle={{
                        width : '1900px',
                        height : '700px',
                        margin : '20px'
                    }}
                    center={center}
                    zoom={13}
                    onClick={()=>{
                        setActiveMarker(null)
                    }}
                >
                    {
                        props.mapData_s.map((value)=>{
                            //console.log(value);
                            return(
                                <>
                                    <Marker 
                                        position={value}
                                        icon={
                                            {
                                                url : '2.png',
                                                scaledSize : new google.maps.Size(20,25),
                                            }
                                        }
                                        onMouseOver={() => {handleActiveMarker(value.num)}}
                                    />
                                    {activeMarker === value.num && (
                                        <InfoWindow 
                                            position={{lat : value.lat , lng : value.lng}}
                                            onCloseClick={() => setActiveMarker(null)}
                                        >
                                            <div className="infowindow">
                                                <p className="infoitem info_title">{value.wn_node}</p>
                                                <p className="infoitem">lat : {value.lat}</p>
                                                <p className="infoitem">lng : {value.lng}</p>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </>
                            );
                        })
                    }
                    {
                        props.popData_s.map(value=>{
                            //console.log(value);
                            return (
                                <>
                                    <Marker 
                                        position={value}
                                        icon={
                                            {
                                                url : 'nodepop.png',
                                                scaledSize : new google.maps.Size(20,25),
                                            }
                                        }
                                        onMouseOver={() => {handleActiveMarker(value.num)}}
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
                                        </InfoWindow>
                                    )}
                                </>
                            );
                        })
                    }
                    {
                        props.trunk_s.map(value=>{
                            //console.log(value);
                            return (
                                <>
                                <Marker 
                                    position={value}
                                    icon={
                                        {
                                            url : '3.png',
                                            scaledSize : new google.maps.Size(20,25),
                                        }
                                    }
                                    onMouseOver={() => {handleActiveMarker(value.num)}}
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
                                    </InfoWindow>
                                )}
                                </>
                            );
                        })
                    }
                    {linebw2}

                </GoogleMap>
            </LoadScript>
        </div>
    )
}
