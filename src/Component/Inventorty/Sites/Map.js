/*global google*/
import React,{ useState,useEffect } from "react";
import axios from "axios";
import InfoMap from "./InfoMap";
function Map(){
    
    /* 
    (1) Data 가져오기 v
    (2) Google Map 연결 v
    (3) Data에 있는 좌표 추출 v
    (4) 추출한 좌표에 마커를 생성 v
    (5) 마커 사이즈 변경 v
    (6) 마커에 부가정보 넣기
    (7) 선으로 연결
     */
    const [mapData,setMapData] = useState([]);
    const [popData,setPopData] = useState([]);
    const [trunk,setTrunk] = useState([]);

    useEffect(() => {
        extraction();
        extraction2();
        extraction3();
    },[]);

    /* 데이터 가져오기 */
    const extraction = async () =>{
        await axios.get('http://somweb.cf:8000/map/wn')
        .then(value=>{
            //console.log(value.data.data);
            setMapData(value.data.data);
        }).catch(()=>{
            console.log(Error);
        })
    };

    const extraction2 = async () => {
        await axios.get('http://somweb.cf:8000/map/pop')
        .then((value)=>{
            //console.log(value.data.data);
            setPopData(value.data.data);
        }).catch(()=>{
            console.log(Error);
        })
    };

    const extraction3 = async () =>{
        await axios.get('http://somweb.cf:8000/map/an')
        .then((value)=>{
            //console.log(value.data.data);
            setTrunk(value.data.data);
        }).catch(()=>{
            console.log(Error);
        })
    };

    /* 구간나누기 */
    const line1 = [];
    const line2 = [];
    const line3 = [];
    const line4 = [];
    const line5 = [];
    const line6 = [];
    const line7 = [];
    const line8 = [];
    const line9 = [];
    const line10 = [];
    const line11 = [];
    const line12 = [];
    const line13 = [];
    const line14 = [];
    const line15 = [];
    const line16 = [];
    const line17 = [];
    const line18 = [];

    const filtering_mapData = mapData.map((value)=>{
        if(value.line === 1 && 0 <= value.bw && value.bw <= 100){
            line1.push(value);
        }else if(value.line === 1 && 100 < value.bw && value.bw <= 200){
            line2.push(value);
        }else if(value.line === 1 && 200 < value.bw && value.bw <= 300){
            line3.push(value);
        }else if(value.line === 2 && 0 <= value.bw && value.bw <= 100){
            line4.push(value);
        }else if(value.line === 2 && 100 < value.bw && value.bw <= 200){
            line5.push(value);
        }else if(value.line === 2 && 200 < value.bw && value.bw <= 300){
            line6.push(value);
        }else if(value.line === 3 && 0 <= value.bw && value.bw <= 100){
            line7.push(value);
        }else if(value.line === 3 && 100 < value.bw && value.bw <= 200){
            line8.push(value);
        }else if(value.line === 3 && 200 < value.bw && value.bw <= 300){
            line9.push(value);
        }else if(value.line === 4 && 0 <= value.bw && value.bw <= 100){
            line10.push(value);
        }else if(value.line === 4 && 100 < value.bw && value.bw <= 200){
            line11.push(value);
        }else if(value.line === 4 && 200 < value.bw && value.bw <= 300){
            line12.push(value);
        }else if(value.line === 5 && 0 <= value.bw && value.bw <= 100){
            line13.push(value);
        }else if(value.line === 5 && 100 < value.bw && value.bw <= 200){
            line14.push(value);
        }else if(value.line === 5 && 200 < value.bw && value.bw <= 300){
            line15.push(value);
        }else if(value.line === 6 && 0 <= value.bw && value.bw <= 100){
            line16.push(value);
        }else if(value.line === 6 && 100 < value.bw && value.bw <= 200){
            line17.push(value);
        }else if(value.line === 6 && 200 < value.bw && value.bw <= 300){
            line18.push(value);
        }
    })
    
    const filtering_popData2 = popData.map((value)=>{
        if(value.line === 1 && 0 <= value.bw && value.bw <= 100){
            line1.push(value);
        }else if(value.line === 1 && 100 < value.bw && value.bw <= 200){
            line2.push(value);
        }else if(value.line === 1 && 200 < value.bw && value.bw <= 300){
            line3.push(value);
        }else if(value.line === 2 && 0 <= value.bw && value.bw <= 100){
            line4.push(value);
        }else if(value.line === 2 && 100 < value.bw && value.bw <= 200){
            line5.push(value);
        }else if(value.line === 2 && 200 < value.bw && value.bw <= 300){
            line6.push(value);
        }else if(value.line === 3 && 0 <= value.bw && value.bw <= 100){
            line7.push(value);
        }else if(value.line === 3 && 100 < value.bw && value.bw <= 200){
            line8.push(value);
        }else if(value.line === 3 && 200 < value.bw && value.bw <= 300){
            line9.push(value);
        }else if(value.line === 4 && 0 <= value.bw && value.bw <= 100){
            line10.push(value);
        }else if(value.line === 4 && 100 < value.bw && value.bw <= 200){
            line11.push(value);
        }else if(value.line === 4 && 200 < value.bw && value.bw <= 300){
            line12.push(value);
        }else if(value.line === 5 && 0 <= value.bw && value.bw <= 100){
            line13.push(value);
        }else if(value.line === 5 && 100 < value.bw && value.bw <= 200){
            line14.push(value);
        }else if(value.line === 5 && 200 < value.bw && value.bw <= 300){
            line15.push(value);
        }else if(value.line === 6 && 0 <= value.bw && value.bw <= 100){
            line16.push(value);
        }else if(value.line === 6 && 100 < value.bw && value.bw <= 200){
            line17.push(value);
        }else if(value.line === 6 && 200 < value.bw && value.bw <= 300){
            line18.push(value);
        }
    })
    
    const filtering_trunkData3 = trunk.map((value)=>{
        if(value.line === 1 && 0 <= value.bw && value.bw <= 100){
            line1.push(value);
        }else if(value.line === 1 && 100 < value.bw && value.bw <= 200){
            line2.push(value);
        }else if(value.line === 1 && 200 < value.bw && value.bw <= 300){
            line3.push(value);
        }else if(value.line === 2 && 0 <= value.bw && value.bw <= 100){
            line4.push(value);
        }else if(value.line === 2 && 100 < value.bw && value.bw <= 200){
            line5.push(value);
        }else if(value.line === 2 && 200 < value.bw && value.bw <= 300){
            line6.push(value);
        }else if(value.line === 3 && 0 <= value.bw && value.bw <= 100){
            line7.push(value);
        }else if(value.line === 3 && 100 < value.bw && value.bw <= 200){
            line8.push(value);
        }else if(value.line === 3 && 200 < value.bw && value.bw <= 300){
            line9.push(value);
        }else if(value.line === 4 && 0 <= value.bw && value.bw <= 100){
            line10.push(value);
        }else if(value.line === 4 && 100 < value.bw && value.bw <= 200){
            line11.push(value);
        }else if(value.line === 4 && 200 < value.bw && value.bw <= 300){
            line12.push(value);
        }else if(value.line === 5 && 0 <= value.bw && value.bw <= 100){
            line13.push(value);
        }else if(value.line === 5 && 100 < value.bw && value.bw <= 200){
            line14.push(value);
        }else if(value.line === 5 && 200 < value.bw && value.bw <= 300){
            line15.push(value);
        }else if(value.line === 6 && 0 <= value.bw && value.bw <= 100){
            line16.push(value);
        }else if(value.line === 6 && 100 < value.bw && value.bw <= 200){
            line17.push(value);
        }else if(value.line === 6 && 200 < value.bw && value.bw <= 300){
            line18.push(value);
        }
    })

    
    /* 버튼 이벤트 */
    const onClickbtn = () =>{
        extraction();
        extraction2();
        extraction3();
        console.log('Update');
    };

    return (
        <>
            <InfoMap
                mapData={mapData}
                popData={popData}
                trunk={trunk}
                line1={line1}
                line2={line2}
                line3={line3}
                line4={line4}
                line5={line5}
                line6={line6}
                line7={line7}
                line8={line8}
                line9={line9}
                line10={line10}
                line11={line11}
                line12={line12}
                line13={line13}
                line14={line14}
                line15={line15}
                line16={line16}
                line17={line17}
                line18={line18}
            />
            <button onClick={onClickbtn}>Update</button>
        </>
    );
}

export default Map;
