import {Link} from "react-router-dom";
import React from 'react'
import AnchorTemporaryDrawer from './drawer';
import "./styles.css";
import Button from "/Users/srijanshitashma/Desktop/prices/src/components/Common/Button/index.js";
function Header() {
  return (
    <div className='navbar'>
        <h1 className="logo">
            CoinMap<span className="largedot" style={{color: "aquamarine" }}>.</span>
        </h1>
        <div className="links">
            <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/dashboard">
                <Button className="gainer-loser-botton" text={"Dashboard"} onClick={() => console.log("BTN")} outlined={true}/>
            </Link>
            <Link to="/GainersLosers">
                <Button className="gainer-loser-botton" text={"Gainers Losers"} onClick={()=>console.log("GainLoss")} outlined={true}/>
            </Link>
        </div>
        <div className="Drawer">
            <AnchorTemporaryDrawer />
        </div>
    </div>
  )
}

export default Header;