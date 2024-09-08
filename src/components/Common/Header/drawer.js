import * as React from 'react';
import {useState} from "react";
import Drawer from '@mui/material/Drawer';
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import { IconButton } from '@mui/material';
import {Link} from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer-full">
      
          <IconButton aria-label="Options" onClick={()=>setOpen(true)}>
            <ArrowDropDownCircleSharpIcon className="link"/>
          </IconButton>
          <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-inner">
          <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/GainersLosers">
                <p className="link">Gainers Losers</p>
            </Link>
            <Link to="/dashboard">
                <p className="link">Dashboard</p>
            </Link>
        </div>
          </Drawer>
      
    </div>
  );
}
