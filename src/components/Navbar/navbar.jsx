import React from "react";
import './navbar.css';
import logoo from "../../assets/logoo.png";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Navbar() {
  return (
    <div className="navv">
      <div className="logo">
        <img src={logoo} alt="logo" />
      </div>
      <div className="nav-options">
        {["Products", "Solutions", "Resources", "Pricing"].map((label, index) => (
          <FormControl variant="standard" key={index} sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>{label}</InputLabel>
            <Select defaultValue="">
              <MenuItem value="Option1">{label} 1</MenuItem>
              <MenuItem value="Option2">{label} 2</MenuItem>
              <MenuItem value="Option3">{label} 3</MenuItem>
            </Select>
          </FormControl>
        ))}
        <button className="nav-button">Login</button>
        <button className="nav-button primary">Try Whitepace free</button>
      </div>
    </div>
  );
}

export default Navbar;
