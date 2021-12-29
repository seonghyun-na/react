import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import InfoMap2 from './InfoMap2';
import Testmap from './Testmap';
import Example from './Example';
import Googlemap from './Googlemap';

export default function Map2() {
    const [mapData_s,setMapData_s] = useState([]);
    const [popData_s,setPopData_s] = useState([]);
    const [trunk_s,setTrunk_s] = useState([]);

    useEffect(()=>{
        fuc1();
        fuc2();
        fuc3();
    },[])

    const fuc1 = async ()=>{
        await axios.get('http://somweb.cf:8000/map2/wn')
        .then(value=>{
            //console.log(value.data.data);
            setMapData_s(value.data.data);
        }).catch(()=>{
            throw Error;
        })
    };
    const fuc2 = async ()=>{
        await axios.get('http://somweb.cf:8000/map2/pop')
        .then(value=>{
            //console.log(value.data.data);
            setPopData_s(value.data.data);
        }).catch(()=>{
            throw Error;
        })
    };
    const fuc3 = async ()=>{
        await axios.get('http://somweb.cf:8000/map2/an')
        .then(value=>{
            //console.log(value.data.data);
            setTrunk_s(value.data.data);
        }).catch(()=>{
            throw Error;
        })
    };
    const onClickbtn_s = () =>{
        fuc1();
        fuc2();
        fuc3();
    };

    const totalLine = [];

    mapData_s.map(value=>{
        totalLine.push(value);
    });
    popData_s.map(value=>{
        totalLine.push(value);
    });
    trunk_s.map(value=>{
        totalLine.push(value);
    })

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
    const line19 = [];
    const line20 = [];
    const line21 = [];
    const line22 = [];
    const line23 = [];
    const line24 = [];
    const line25 = [];
    const line26 = [];
    const line27 = [];
    const line28 = [];
    const line29 = [];
    const line30 = [];
    const line31 = [];
    const line32 = [];

    const filtering_mapData_s = mapData_s.map((value)=>{
        if(value.line === 1 && 0 <= value.bw && value.bw <= 100){
            line1.push(value);
        }else if(value.line === 1 && 100 < value.bw && value.bw <= 200){
            line2.push(value);
        }else if(value.line === 1 && 200 < value.bw && value.bw <= 300){
            line3.push(value);
        }else if(value.line === 1 && 300 < value.bw && value.bw <= 400){
            line4.push(value);
        }else if(value.line === 2 && 0 <= value.bw && value.bw <= 100){
            line5.push(value);
        }else if(value.line === 2 && 100 < value.bw && value.bw <= 200){
            line6.push(value);
        }else if(value.line === 2 && 200 < value.bw && value.bw <= 300){
            line7.push(value);
        }else if(value.line === 2 && 300 < value.bw && value.bw <= 400){
            line8.push(value);
        }else if(value.line === 3 && 0 <= value.bw && value.bw <= 100){
            line9.push(value);
        }else if(value.line === 3 && 100 < value.bw && value.bw <= 200){
            line10.push(value);
        }else if(value.line === 3 && 200 < value.bw && value.bw <= 300){
            line11.push(value);
        }else if(value.line === 3 && 300 < value.bw && value.bw <= 400){
            line12.push(value);
        }else if(value.line === 4 && 0 <= value.bw && value.bw <= 100){
            line13.push(value);
        }else if(value.line === 4 && 100 < value.bw && value.bw <= 200){
            line14.push(value);
        }else if(value.line === 4 && 200 < value.bw && value.bw <= 300){
            line15.push(value);
        }else if(value.line === 4 && 300 < value.bw && value.bw <= 400){
            line16.push(value);
        }else if(value.line === 5 && 0 <= value.bw && value.bw <= 100){
            line17.push(value);
        }else if(value.line === 5 && 100 < value.bw && value.bw <= 200){
            line18.push(value);
        }else if(value.line === 5 && 200 < value.bw && value.bw <= 300){
            line19.push(value);
        }else if(value.line === 5 && 300 < value.bw && value.bw <= 400){
            line20.push(value);
        }else if(value.line === 6 && 0 <= value.bw && value.bw <= 100){
            line21.push(value);
        }else if(value.line === 6 && 100 < value.bw && value.bw <= 200){
            line22.push(value);
        }else if(value.line === 6 && 200 < value.bw && value.bw <= 300){
            line23.push(value);
        }else if(value.line === 6 && 300 < value.bw && value.bw <= 400){
            line24.push(value);
        }else if(value.line === 7 && 0 <= value.bw && value.bw <= 100){
            line25.push(value);
        }else if(value.line === 7 && 100 < value.bw && value.bw <= 200){
            line26.push(value);
        }else if(value.line === 7 && 200 < value.bw && value.bw <= 300){
            line27.push(value);
        }else if(value.line === 7 && 300 < value.bw && value.bw <= 400){
            line28.push(value);
        }else if(value.line === 8 && 0 <= value.bw && value.bw <= 100){
            line29.push(value);
        }else if(value.line === 8 && 100 < value.bw && value.bw <= 200){
            line30.push(value);
        }else if(value.line === 8 && 200 < value.bw && value.bw <= 300){
            line31.push(value);
        }else if(value.line === 8 && 300 < value.bw && value.bw <= 400){
            line32.push(value);
        }
    })
    
    const filtering_popData2_s = popData_s.map((value)=>{
        if(value.line === 1 && 0 <= value.bw && value.bw <= 100){
            line1.push(value);
        }else if(value.line === 1 && 100 < value.bw && value.bw <= 200){
            line2.push(value);
        }else if(value.line === 1 && 200 < value.bw && value.bw <= 300){
            line3.push(value);
        }else if(value.line === 1 && 300 < value.bw && value.bw <= 400){
            line4.push(value);
        }else if(value.line === 2 && 0 <= value.bw && value.bw <= 100){
            line5.push(value);
        }else if(value.line === 2 && 100 < value.bw && value.bw <= 200){
            line6.push(value);
        }else if(value.line === 2 && 200 < value.bw && value.bw <= 300){
            line7.push(value);
        }else if(value.line === 2 && 300 < value.bw && value.bw <= 400){
            line8.push(value);
        }else if(value.line === 3 && 0 <= value.bw && value.bw <= 100){
            line9.push(value);
        }else if(value.line === 3 && 100 < value.bw && value.bw <= 200){
            line10.push(value);
        }else if(value.line === 3 && 200 < value.bw && value.bw <= 300){
            line11.push(value);
        }else if(value.line === 3 && 300 < value.bw && value.bw <= 400){
            line12.push(value);
        }else if(value.line === 4 && 0 <= value.bw && value.bw <= 100){
            line13.push(value);
        }else if(value.line === 4 && 100 < value.bw && value.bw <= 200){
            line14.push(value);
        }else if(value.line === 4 && 200 < value.bw && value.bw <= 300){
            line15.push(value);
        }else if(value.line === 4 && 300 < value.bw && value.bw <= 400){
            line16.push(value);
        }else if(value.line === 5 && 0 <= value.bw && value.bw <= 100){
            line17.push(value);
        }else if(value.line === 5 && 100 < value.bw && value.bw <= 200){
            line18.push(value);
        }else if(value.line === 5 && 200 < value.bw && value.bw <= 300){
            line19.push(value);
        }else if(value.line === 5 && 300 < value.bw && value.bw <= 400){
            line20.push(value);
        }else if(value.line === 6 && 0 <= value.bw && value.bw <= 100){
            line21.push(value);
        }else if(value.line === 6 && 100 < value.bw && value.bw <= 200){
            line22.push(value);
        }else if(value.line === 6 && 200 < value.bw && value.bw <= 300){
            line23.push(value);
        }else if(value.line === 6 && 300 < value.bw && value.bw <= 400){
            line24.push(value);
        }else if(value.line === 7 && 0 <= value.bw && value.bw <= 100){
            line25.push(value);
        }else if(value.line === 7 && 100 < value.bw && value.bw <= 200){
            line26.push(value);
        }else if(value.line === 7 && 200 < value.bw && value.bw <= 300){
            line27.push(value);
        }else if(value.line === 7 && 300 < value.bw && value.bw <= 400){
            line28.push(value);
        }else if(value.line === 8 && 0 <= value.bw && value.bw <= 100){
            line29.push(value);
        }else if(value.line === 8 && 100 < value.bw && value.bw <= 200){
            line30.push(value);
        }else if(value.line === 8 && 200 < value.bw && value.bw <= 300){
            line31.push(value);
        }else if(value.line === 8 && 300 < value.bw && value.bw <= 400){
            line32.push(value);
        }
    })
    
    const filtering_popData3 = trunk_s.map((value)=>{
        if(value.line === 1 && 0 <= value.bw && value.bw <= 100){
            line1.push(value);
        }else if(value.line === 1 && 100 < value.bw && value.bw <= 200){
            line2.push(value);
        }else if(value.line === 1 && 200 < value.bw && value.bw <= 300){
            line3.push(value);
        }else if(value.line === 1 && 300 < value.bw && value.bw <= 400){
            line4.push(value);
        }else if(value.line === 2 && 0 <= value.bw && value.bw <= 100){
            line5.push(value);
        }else if(value.line === 2 && 100 < value.bw && value.bw <= 200){
            line6.push(value);
        }else if(value.line === 2 && 200 < value.bw && value.bw <= 300){
            line7.push(value);
        }else if(value.line === 2 && 300 < value.bw && value.bw <= 400){
            line8.push(value);
        }else if(value.line === 3 && 0 <= value.bw && value.bw <= 100){
            line9.push(value);
        }else if(value.line === 3 && 100 < value.bw && value.bw <= 200){
            line10.push(value);
        }else if(value.line === 3 && 200 < value.bw && value.bw <= 300){
            line11.push(value);
        }else if(value.line === 3 && 300 < value.bw && value.bw <= 400){
            line12.push(value);
        }else if(value.line === 4 && 0 <= value.bw && value.bw <= 100){
            line13.push(value);
        }else if(value.line === 4 && 100 < value.bw && value.bw <= 200){
            line14.push(value);
        }else if(value.line === 4 && 200 < value.bw && value.bw <= 300){
            line15.push(value);
        }else if(value.line === 4 && 300 < value.bw && value.bw <= 400){
            line16.push(value);
        }else if(value.line === 5 && 0 <= value.bw && value.bw <= 100){
            line17.push(value);
        }else if(value.line === 5 && 100 < value.bw && value.bw <= 200){
            line18.push(value);
        }else if(value.line === 5 && 200 < value.bw && value.bw <= 300){
            line19.push(value);
        }else if(value.line === 5 && 300 < value.bw && value.bw <= 400){
            line20.push(value);
        }else if(value.line === 6 && 0 <= value.bw && value.bw <= 100){
            line21.push(value);
        }else if(value.line === 6 && 100 < value.bw && value.bw <= 200){
            line22.push(value);
        }else if(value.line === 6 && 200 < value.bw && value.bw <= 300){
            line23.push(value);
        }else if(value.line === 6 && 300 < value.bw && value.bw <= 400){
            line24.push(value);
        }else if(value.line === 7 && 0 <= value.bw && value.bw <= 100){
            line25.push(value);
        }else if(value.line === 7 && 100 < value.bw && value.bw <= 200){
            line26.push(value);
        }else if(value.line === 7 && 200 < value.bw && value.bw <= 300){
            line27.push(value);
        }else if(value.line === 7 && 300 < value.bw && value.bw <= 400){
            line28.push(value);
        }else if(value.line === 8 && 0 <= value.bw && value.bw <= 100){
            line29.push(value);
        }else if(value.line === 8 && 100 < value.bw && value.bw <= 200){
            line30.push(value);
        }else if(value.line === 8 && 200 < value.bw && value.bw <= 300){
            line31.push(value);
        }else if(value.line === 8 && 300 < value.bw && value.bw <= 400){
            line32.push(value);
        }
    })

        return (
        <div>
            {/*<InfoMap2
                mapData_s={mapData_s}
                popData_s={popData_s}
                trunk_s={trunk_s}
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
                line19={line19}
                line20={line20}
                line21={line21}
                line22={line22}
                line23={line23}
                line24={line24}
                line25={line25}
                line26={line26}
                line27={line27}
                line28={line28}
                line29={line29}
                line30={line30}
                line31={line31}
                line32={line32}
            />*/}
            {/*<Testmap 
                totalLine={totalLine}
                mapData_s={mapData_s}
                popData_s={popData_s}
                trunk_s={trunk_s}
            />*/}
            {/*<Example
                totalLine={totalLine}
                mapData_s={mapData_s}
                popData_s={popData_s}
                trunk_s={trunk_s}
            />*/}
            {<Googlemap totalLine={totalLine}/>}
            <button onClick={onClickbtn_s}>Update</button>
        </div>
    )
}