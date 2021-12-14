import React, { Component } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

class Wbnx5 extends Component {
    state={
        data : [],
        result: [],
        isLoading: true,
        errcode: 'Loading...',
        timestamp: [],
    };

    getdata = async () =>{
        const dataset = await axios.get('http://somweb.cf:8000/wn-t1-x3-r0')
        .then((data) => {
            const mydata = data.data.data;
            return this.setState({data:mydata, isLoading: false});
        }).catch(()=>{
            this.setState({errcode:'NOT FOUND FILE!'});
        })
    }
    gettimer = () =>{
        console.log("Time Start!");

        let time = new Date();
        let years = time.getFullYear();
        let month = time.getMonth();
        let date = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const result = `Requested at : ${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}, ${years}-${month+1}-${date}`;

        return this.setState({result:result});
    }
    getstamp = () =>{
        axios.get('http://somweb.cf:8000/wbn-timestamp').then(response=>{
            const x = response.data.data;
            return this.setState({timestamp : x});
        }).catch(()=>{
            this.setState({errcode:'NOT FOUND FILE!'});
        })
    }
    componentDidMount(){
        this.getdata();
        this.gettimer();
        this.getstamp();
    }
    renderbtn = () => {
        this.getdata();
        this.gettimer();
        this.getstamp();
    }
    render() {
        const {data, result, isLoading, errcode, timestamp} = this.state;
        const tt = timestamp.map(data=>{
            if(data.offset === 1){
                const y = data.timestamp;
                return (<p className="xx">Referenced Time {y}</p>);
            }
        });
        
        const chartall = data.filter((value)=>{
            return value.offset;
        })
        const chartoffset = chartall.map((value)=>{
            return value.offset;
        })
        const chartoffset24 = data.filter((value)=>{
            return value.offset < 25;
        })
        const chartName24 = chartoffset24.map(value =>{
            return value.offset;
        })

        const chartspeed_in = data.map((value)=>{
            return value.speed_in;
        });
        const chartspeed_out = data.map((value)=>{
            return value.speed_out;
        });
        const chartspeed_total = data.map((value)=>{
            return value.speed_total;
        });
        console.log(chartspeed_total);

        const sum = function(x,y){
            return x + y;
        };

        const square = function(x){
            return x * x;
        };

        const mean = chartspeed_total.reduce(sum, 0)/chartspeed_total.length;
        const deviations = chartspeed_total.map(function(x){
            return x-mean;
        });

        const stddev = Math.sqrt(deviations.map(square).reduce(sum, 0)/(chartspeed_total.length-1));
        const stddev2 = new Array(24).fill(stddev);
        
        const meanValue = mean.toFixed(2);
        const stddevValue = stddev.toFixed(2);
        console.log(mean);
        console.log(meanValue);
        console.log(stddev);
        console.log(stddevValue);

        let min = 0;
        let max = 0;

        const x = chartspeed_total.map((value)=>{
            if(value < min){
                min = value;
                console.log(`현재 min의 값은 ${min}입니다.`)
            }else if(value > max){
                max = value;
                console.log(`현재 max의 값은 ${max}입니다.`)
            }else{
                console.log(value)
            }
        })

        let chaptertotal = [];
        let chapter1 = [];
        let chapter2 = [];
        let chapter3 = [];
        let chapter4 = [];
        let chapter5 = [];
        let chapter6 = [];
        let chapter7 = [];
        let chapter8 = [];
        let chapter9 = [];
        let chapter10 = [];
        let chapter11 = [];
        let chapter12 = [];
        let chapter13 = [];
        let chapter14 = [];
        let chapter15 = [];
        let chapter16 = [];
        let chapter17 = [];
        let chapter18 = [];
        let chapter19 = [];
        let chapter20 = [];
        let chapter21 = [];
        let chapter22 = [];
        let chapter23 = [];
        let chapter24 = [];

        const Linedata = chartspeed_total.map((value)=>{
            if(min <= value && min+1 > value){
                chapter1.push({value : value});
            }else if(min+1 <= value && min+2 > value){
                chapter2.push(value);
            }else if(min+2 <= value && min+3 > value){
                chapter3.push(value);
            }else if(min+3 <= value && min+4 > value){
                chapter4.push(value);
            }else if(min+5 <= value && min+6 > value){
                chapter5.push(value);
            }else if(min+6<= value && min+7 > value){
                chapter6.push(value);
            }else if(min+7 <= value && min+8 > value){
                chapter7.push(value);
            }else if(min+8 <= value && min+9 > value){
                chapter8.push(value);
            }else if(min+9 <= value && min+10 > value){
                chapter9.push(value);
            }else if(min+10 <= value && min+11 > value){
                chapter10.push(value);
            }else if(min+11<= value && min+12 > value){
                chapter11.push(value);
            }else if(min+12 <= value && min+13 > value){
                chapter12.push(value);
            }else if(min+13 <= value && min+14 > value){
                chapter13.push(value);
            }else if(min+14 <= value && min+15 > value){
                chapter14.push(value);
            }else if(min+15 <= value && min+16 > value){
                chapter15.push(value);
            }else if(min+16<= value && min+17 > value){
                chapter16.push(value);
            }else if(min+17 <= value && min+18 > value){
                chapter17.push(value);
            }else if(min+18 <= value && min+19 > value){
                chapter18.push(value);
            }else if(min+19 <= value && min+20 > value){
                chapter19.push(value);
            }else if(min+20 <= value && min+21 > value){
                chapter20.push(value);
            }else if(min+21<= value && min+22 > value){
                chapter21.push(value);
            }else if(min+22 <= value && min+23 > value){
                chapter22.push(value);
            }else if(min+23 <= value && min+24 > value){
                chapter23.push(value);
            }else if(min+24 <= value && max > value){
                chapter24.push(value);
            }else{
                console.log(Error);
            }
        });

        /*console.log(chapter1);
        console.log(chapter2);
        console.log(chapter3);
        console.log(chapter4);
        console.log(chapter5);*/

        const totalLength = chartoffset.length;

        chaptertotal.push(chapter1.length / totalLength *100);
        chaptertotal.push(chapter2.length / totalLength *100);
        chaptertotal.push(chapter3.length / totalLength *100);
        chaptertotal.push(chapter4.length / totalLength *100);
        chaptertotal.push(chapter5.length / totalLength *100);
        chaptertotal.push(chapter6.length / totalLength *100);
        chaptertotal.push(chapter7.length / totalLength *100);
        chaptertotal.push(chapter8.length / totalLength *100);
        chaptertotal.push(chapter9.length / totalLength *100);
        chaptertotal.push(chapter10.length / totalLength *100);
        chaptertotal.push(chapter11.length / totalLength *100);
        chaptertotal.push(chapter12.length / totalLength *100);
        chaptertotal.push(chapter13.length / totalLength *100);
        chaptertotal.push(chapter14.length / totalLength *100);
        chaptertotal.push(chapter15.length / totalLength *100);
        chaptertotal.push(chapter16.length / totalLength *100);
        chaptertotal.push(chapter17.length / totalLength *100);
        chaptertotal.push(chapter18.length / totalLength *100);
        chaptertotal.push(chapter19.length / totalLength *100);
        chaptertotal.push(chapter20.length / totalLength *100);
        chaptertotal.push(chapter21.length / totalLength *100);
        chaptertotal.push(chapter22.length / totalLength *100);
        chaptertotal.push(chapter23.length / totalLength *100);
        chaptertotal.push(chapter24.length / totalLength *100);

        
        //console.log(chaptertotal);

        const linedata = {
            labels:chartoffset,
            datasets: [
                {
                    type : 'bar',
                    label:'In',
                    data: chartspeed_in,
                    fill: true,
                    backgroundColor:'#66bb6a',
                    borderColor:'#66bb6a'
                },
                {
                    type : 'bar',
                    label:'Out',
                    data: chartspeed_out,
                    backgroundColor: 'rgba(75,192,192)',
                    borderColor: 'rgba(75,192,192)',
                },
                {
                    type: 'line',
                    label: 'Total',
                    data : chartspeed_total,
                    backgroundColor : 'pink',
                    borderColor : 'pink',
                }
            ]
        };

        /*const linedata2 = {
            labels:chartoffset,
            datasets: [
                {
                    type : 'line',
                    label:'Total',
                    data: chartspeed_total,
                    backgroundColor: 'rgba(75,192,192)',
                    borderColor: 'rgba(75,192,192)',
                }
            ]
        };*/

        const linedata3 = {
            labels:chartName24,
            datasets: [
                {
                    type : 'bar',
                    label:'Frequency_bar',
                    data: chaptertotal,
                    fill: true,
                    backgroundColor:'rgba(75,192,192)',
                    borderColor:'rgba(75,192,192)'
                },
                {
                    type : 'line',
                    label:'Frequency_line',
                    data: chaptertotal,
                    backgroundColor: '#66bb6a',
                    borderColor: '#66bb6a',
                }
            ]
        };
        return (
            <div className="table">
                {isLoading ? <div className="loader">
                    <span className="loader__text">{errcode}</span>
                </div> :
                    ( 
                        <div className="container">
                            <span className="spantitle">
                            <div className="titletotal">
                                <span className="title1 pstyle">Network Node Name:</span>
                                <span className="title2 pstyle">WN-T1-X1(R1-AP3)</span>
                            </div>
                            {tt}
                            <div className="itembox">
                                <p className="result">{result}</p>
                                <button onClick={this.renderbtn}>Next</button>
                            </div>
                        </span>

                        <div className="content">
                            <div className="chart chartlayout">
                            <p>Bandwidth Measurement Result(In, Out, Total)</p>
                                <Bar 
                                    data={linedata}
                                    width={1050}
                                    height={500}
                                    options={
                                        {
                                            scales:{
                                                x : {
                                                    title: {
                                                        display: true,
                                                        align: 'center',
                                                        font: {
                                                            size: 15,
                                                        },
                                                        text : 'Time Offset(5 mins )'
                                                    }
                                                },
                                                y : {
                                                    title: {
                                                        display: true,
                                                        align: 'end',
                                                        font: {
                                                            size: 15,
                                                        },
                                                        text: 'Mbps'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                />
                                </div>
                                {/*<div className="chart2 chartlayout">
                                <p>Total-BandWidth Distribution</p>
                                <Bar 
                                    data={linedata2}
                                    width={550}
                                    height={500}
                                    options={
                                        {
                                            scales:{
                                                x : {
                                                    title: {
                                                        display: true,
                                                        align: 'center',
                                                        font: {
                                                            size: 15,
                                                        },
                                                        text : 'Time Offset(5 mins )'
                                                    }
                                                },
                                                y : {
                                                    title: {
                                                        display: true,
                                                        align: 'end',
                                                        font: {
                                                            size: 15,
                                                        },
                                                        text: 'Mbps'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                />
                                </div>*/}
                                <div className="chart3 chartlayout">
                                <p>Total Bandwidth Distribution</p>
                                <Bar 
                                    data={linedata3}
                                    width={700}
                                    height={500}
                                    options={
                                        {
                                            scales:{
                                                xAxes : {
                                                    title: {
                                                        display: true,
                                                        align: 'center',
                                                        font: {
                                                            size: 15,
                                                        },
                                                        text : 'Bandwidth ( Mbps )'
                                                    }
                                                },
                                                yAxes : {
                                                    ticks : {
                                                        max : 100,
                                                        min : 0,
                                                        stepSize : 5,
                                                        //maxTicksLimit: 2,
                                                    },
                                                    title: {
                                                        display: true,
                                                        align: 'end',
                                                        font: {
                                                            size: 15,
                                                        },
                                                        text: 'Frequency(%)'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                />
                                <p className="footertitle">[Average : {meanValue} , Deviation : {stddevValue}]</p>
                                </div>
                            {/* {<table className="tableset">
                                <thead className="headstyle">
                                    <tr>
                                        <td>Time</td>
                                        <td colSpan="3">BandWidth(Mbps)</td>
                                    </tr>
                                    <tr>
                                        <td>offset</td>
                                        <td>In</td>
                                        <td>Out</td>
                                        <td>Total</td>
                                    </tr>
                                </thead>
                                <tbody className='size'>
                                    {
                                        data12.map(value=>{
                                            return (
                                                <tr>
                                                    <td>{value.offset}</td>
                                                    <td>{value.speed_in}</td>
                                                    <td>{value.speed_out}</td>
                                                    <td>{value.speed_total}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>

                            <table className="tableset">
                                <thead className="headstyle">
                                    <tr>
                                        <td>Time</td>
                                        <td colSpan="3">BandWidth(Mbps)</td>
                                    </tr>
                                    <tr>
                                        <td>offset</td>
                                        <td>In</td>
                                        <td>Out</td>
                                        <td>Total</td>
                                    </tr>
                                </thead>
                                <tbody className='size'>
                                    {
                                        data24.map(value =>{
                                            return (
                                                <tr>
                                                    <td>{value.offset}</td>
                                                    <td>{value.speed_in}</td>
                                                    <td>{value.speed_out}</td>
                                                    <td>{value.speed_total}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>} */}
                        </div>
                        <footer className="footer">Network Analysis in O2I System</footer>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Wbnx5;