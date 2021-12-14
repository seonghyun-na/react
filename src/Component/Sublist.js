import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Sublist() {
    
    return (
        <div className="sublist">
            <p>WN-T1 : </p>
            <NavLink to="/Wbnx1" className="navlink">WN-T1-X1(R0)</NavLink>
            <NavLink to="/Wbnx2" className="navlink">WN-T1-X2(R0)</NavLink>
            <NavLink to="/Wbnx3" className="navlink">WN-T1-X2(R1-AP1)</NavLink>
            <NavLink to="/Wbnx4" className="navlink">WN-T1-X2(R2-AP2)</NavLink>
            <NavLink to="/Wbnx5" className="navlink">WN-T1-X1(R1-AP3)</NavLink>
            <NavLink to="/Kcf7" className="navlink">Kc-f7</NavLink>
            <NavLink to="/Map" className="navlink">Map</NavLink>
            <NavLink to="/Map2" className="navlink">Map2</NavLink>
        </div>
    )
}
