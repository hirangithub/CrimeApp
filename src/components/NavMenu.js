import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Box, Select, MenuItem, FormControl, Avatar } from '@material-ui/core';
import ProfileImage from '../assets/1.png';
import { useLocation } from "react-router-dom";

const NavMenu = () => {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (

      <Box display="flex" sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>                     
            <ul>
              <NavItem>
                  <NavLink tag={Link} to="/" className={splitLocation[1] === "" ||  splitLocation[1] === "GCRDetail" ? "selected" : ""}>බල අපරාධ (GCR)</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/MOR" className={splitLocation[1] === "MOR" ? "selected" : ""}>සුළු අපරාධ (MOR)</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/MCR" className={splitLocation[1] === "MCR" ? "selected" : ""}>සුළු පැමණලි (MCR)</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/VICE" className={splitLocation[1] === "VICE" ? "selected" : ""}>දුෂණ වැටලීම් (VICE)</NavLink>
              </NavItem>
          </ul>
          <ul>
            <li>
              <FormControl variant="outlined" className="location-dropdown">
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      className="white-version"
                      defaultValue="20"
                  >
                      <MenuItem value={10}>අම්පාර</MenuItem>
                      <MenuItem value={20}>බසවක්කුලම</MenuItem>
                      <MenuItem value={30}>කන්තලේ</MenuItem>
                      <MenuItem value={40}>මිරිහාන</MenuItem>
                      <MenuItem value={50}>ගාල්ල</MenuItem>
                      <MenuItem value={60}>මාතර</MenuItem>
                      <MenuItem value={70}>මාතලේ</MenuItem>
                      <MenuItem value={80}>නුවර</MenuItem>
                      <MenuItem value={90}>කල්මුනේ</MenuItem>
                      <MenuItem value={100}>නුගේගොඩ</MenuItem>
                      <MenuItem value={110}>කොස්වත්ත</MenuItem>
                  </Select>
              </FormControl>
            </li>
            <li>
                <a href="" className="link-avatar"><Avatar alt="Hiran Karu" src={ ProfileImage } /></a>
            </li>
          </ul>
      </Box>

    );
}

export default NavMenu;