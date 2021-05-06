import React from "react";
import logo from "../madcoin_logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div style={barStyle}>
      <div style={upperStyle}>
        <div style={logoStyle}>
          <Link to="/">
            <img src={logo} width="200px" height="150px" alt="logo"></img>
          </Link>
        </div>
        <div style={linksStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/login" style={linkStyle}>
              Login
          </Link>
          <Link to="/register" style={linkStyle}>
              Register
          </Link>
          <Link to="/about" style={linkStyle}>
              About
          </Link>
        </div>
      </div>
    </div>
  );
}

const barStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  top: "0",
};

const upperStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#121212",
};

const linksStyle = {
  marginLeft: "auto",
  marginRight: "5%",
  display: "flex",
  alignItems: "center",
};

const linkStyle = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "22px",
  fontWeight: "normal",
  color: "#F4F4F4",
  padding: "20px",
  textDecoration: "none"
};

const logoStyle = {
  marginLeft: "5%",
};