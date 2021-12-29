import axios from 'axios';
import React,{ useState,useEffect } from 'react'

export default function Wbn_x1() {
    const [Loading,setLoading] = useState(false);
    const [timeStamp,setTimeStamp] = useState(" ");
    const [speed,setSpeed] = useState([]);
    const [ErrMessage,setErrMessage] = useState("");

    useEffect(()=>{
        axios.get('http://somweb.cf:8000/wn-t1-x1-r0')
        .then((value)=>{
            console.log(value);
            setSpeed(value);
            setLoading(true);
        }).catch(()=>{setErrMessage(" 서버로부터 데이터를 받아 올 수 없습니다.")})
    },[]);

    function time(){
        const time = new Date();
        const years = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const hours = time.getHours();
        const minute = time.getMinutes();
        const seconds = time.getSeconds();

        const nowTime = `Requested at : ${hours < 10 ? `0${hours}` : `${hours}`} : ${minute < 10 ? `0${minute}` : `${minute}`}, ${years}-${month+1}-${date}`;
        setTimeStamp(nowTime);
    }



    return (
        <div>
            <h1>Hello</h1>
            <button onClick={time}>Click</button>
            {timeStamp}
        </div>
    )
}
