import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import './Menu.css';
class Menu extends Component {
    state = {
        menu_img: ('./som2.png'),
        
    }
    render() {
        const {menu_img}=this.state;
        return (
                <div className="menu">
                    <img className="imgfile" src={menu_img} alt="SMFI_logo" />
                    <ul className="menu_list">
                        <li className="list_item">
                            <a href="index.html" className="item_a">Home</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="#">Dash Board</a>
                                </li>
                                <li className="hidden_item">
                                    <a href="#">Hello! O2I</a>
                                </li>
                            </ul>
                        </li>

                        <li className="list_item">
                            <a href="#" className="item_a">NetWork</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="#">Overall</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">Geo.Map</a></li>
                                        <li className="sub_item"><a href="">Logical Map</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="#">Cluser</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">All</a></li>
                                        <li className="sub_item"><a href="">Cluster List</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="#">TBN</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">All</a></li>
                                        <li className="sub_item"><a href="">TBN List</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="#">SBN</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">All</a></li>
                                        <li className="sub_item"><a href="">SBN List</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="list_item">
                            <a href="#" className="item_a">SubSystem</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="#">ACS</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">ACS Map</a></li>
                                        <li className="sub_item"><a href="">ACS List</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="#">TTS</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">TTS Map</a></li>
                                        <li className="sub_item"><a href="">TTS List</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="#">STS</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">STS Map</a></li>
                                        <li className="sub_item"><a href="">STS List</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="list_item">
                            <a href="#" className="item_a">SmartNet</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="">Cost-Optimized</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">Traffic</a></li>
                                        <li className="sub_item"><a href="">Latency</a></li>
                                        <li className="sub_item"><a href="">Usage Pattern</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Mission-Critical</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">Finance</a></li>
                                        <li className="sub_item"><a href="">Emergency</a></li>
                                        <li className="sub_item"><a href="">Reserved</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Context-Aware</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">PerFormance</a></li>
                                        <li className="sub_item"><a href="">Redivabidivty</a></li>
                                        <li className="sub_item"><a href="">Unusal Event</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="list_item">
                            <a href="#" className="item_a">Inventory</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="">Sites</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">Map</a></li>
                                        <li className="sub_item"><a href="">Profile</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Devices</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="">All</a></li>
                                        <li className="sub_item"><a href="">Device List</a></li>
                                        <li className="sub_item"><a href="">Device Group</a></li>
                                        <li className="sub_item"><a href="">Add Device</a></li>
                                    </ul>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Power System</a>
                                    <ul className="sub_list">
                                        <li className="sub_item"><a href="Map">Map</a></li>
                                        <li className="sub_item"><a href="">Status</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="list_item">
                            <a href="#" className="item_a">Alarm</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="">All</a></li>
                                <li className="hidden_item">
                                    <a href="">Failure Level</a>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Error Level</a>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Warning Level</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="list_item">
                            <a href="#" className="item_a">SetUp</a>
                            <ul className="hidden_list">
                                <li className="hidden_item">
                                    <a href="">Administrator</a>
                                </li>
                                <li className="hidden_item">
                                    <a href="">SOM Status</a>
                                </li>
                                <li className="hidden_item">
                                    <a href="">License</a>
                                </li>
                                <li className="hidden_item">
                                    <a href="">Help & Support</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Menu;