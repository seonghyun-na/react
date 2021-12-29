import React from 'react'

export default function Infotitle() {
    return (
        <>
            <div className="infotitle">
                <div className="infotitle-item">
                    <div className="infotitle-itemname"> Equipment : </div>
                    <img className="infotitle-style pop" src="12.png" alt="pop" />
                    <p>PoP</p>
                    <img className="infotitle-style trunk" src="smfitrunk.png" alt="trunk" />
                    <p>ACS Trunk Node</p>
                    <img className="infotitle-style wbn" src="smfinode.png" alt="node"/>
                    <p>WBN Node</p>
                </div>
                <div className="infotitle-bandwidthLevel">
                    <div className="infotitle-bandwidthname"> Bandwidth : </div>
                    <img className="infotitle-linestyle" src="color1.png" alt="bw100" />
                    <p>Bronze</p>
                    <img className="infotitle-linestyle" src="color2.png" alt="bw200" />
                    <p>Silver</p>
                    <img className="infotitle-linestyle" src="color3.png" alt="bw300" />
                    <p>Gold</p>
                    <img className="infotitle-linestyle" src="color4.png" alt="bw400"/>
                    <p>Platinum</p>
                </div>
            </div>
        </>
    )
}
