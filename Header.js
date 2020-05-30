import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/About">
        ABOUT
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/">
        HOME
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#26191B",
  color: "#F6ACC8",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  backgroundColor: "#26191B",
  color: "#F6ACC8",
};
