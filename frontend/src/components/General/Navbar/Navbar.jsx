import React, { useState } from "react";
import { Close, KeyboardArrowUp, AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Popover,
  IconButton,
  Fab,
  Toolbar,
} from "@material-ui/core";
import MenuItems from "./MenuItems";
import Popup from "../Popup/Popup";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import BackToTop from "./BackToTop";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => setClicked(!clicked);

  return (
    <div>
      <nav className="NavbarItems">
        <Link to="/">
          <img className="navbar-logo" src="./img/logo/final.png" alt="logo" />
        </Link>
        <div className="user-profile">
          {auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Popover
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Popover>
            </div>
          ) : (
            <div>
              <div className="inner">
                <Popup buttonName="Login" display={<Login />} />
              </div>
              <div className="inner">
                <Popup buttonName="Sign up" display={<Signup />} />
              </div>
            </div>
          )}
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? (
            <Close className="close-icon" />
          ) : (
            <MenuIcon className="bar-icon" />
          )}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Toolbar id="back-to-top-anchor" />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
        />
      </FormGroup>
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </div>
  );
}
