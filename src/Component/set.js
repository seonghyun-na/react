import React,{ Component } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
class Wbnx2 extends Component {
    state={
        data : [],
        result: [],
        isLoading: true,
        errcode: 'Loading...',
        timestamp: [],
    };

    getdata = async () =>{
        console.log("Requesting Data!");
        await axios.get('http://somweb.cf:8000/wn-t1-x2-r0')
        .then((data) => {
            console.log('Data Check!');
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

        const result = `Requested Time : ${hours}:${minutes}:${seconds}, ${years}-${month+1}-${date}`;

        return this.setState({result:result});
    }
    getstamp = () =>{
        axios.get('http://somweb.cf:8000/wbn-timestamp').then(response=>{
            const x = response.data.data;
            console.log('최신 데이터 시간을 업데이트하였습니다.');
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
        const {data, result,isLoading, errcode, timestamp} = this.state;
        const tt = timestamp.map(data=>{
            const y = data.timestamp;
            return (<p className="xx">Last Updated at {y} (offset: 5 mins)</p>);
        });

        const data12 = data.filter((value)=>{
            return value.offset < 13;
        });
        const data24 = data.filter((value)=> {
            return value.offset >= 13;
        });

        const chartall = data.filter((value)=>{
            return value.offset;
        })
        const chartoffset = chartall.map((value)=>{
            return value.offset;
        })

        const chartspeed_in = data.map((value)=>{
            return value.speed_in;
        });
        const chartspeed_out = data.map((value)=>{
            return value.speed_out;
        });

        const linedata = {
            labels:chartoffset,
            datasets: [
                {
                    label:'IN',
                    data: chartspeed_in,
                    fill: true,
                    backgroundColor:'rgba(75,192,192)',
                    borderColor:'rgba(75,192,192)'
                },
                {
                    label:'Out',
                    data: chartspeed_out,
                    backgroundColor: '#742774',
                    borderColor: '#742774',
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
                                <span className="title2 pstyle">WN-T1-X2(R0)</span>
                            </div>
                            <div className="itembox">
                                <p className="result">{result}</p>
                                <button onClick={this.renderbtn}>Next</button>
                            </div>
                            {tt}
                        </span>

                        <div className="content">
                            <div className="chart">
                                <p>BandWidth Analysis</p>
                                <Bar 
                                    data={linedata}
                                    width={600}
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
                                                        text : 'Time offset'
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
                            </table>

                        </div>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Wbnx2;