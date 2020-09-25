import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="head">
      <NavLink
        exact
        to="/"
        className="headLink"
        activeStyle={{
          backgroundColor : "#2848ff",
          color : "white"
        }}
      >
        商城
      </NavLink>
      <NavLink
        exact
        to="/order"
        className="headLink"
        activeStyle={{
          backgroundColor : "#2848ff",
          color : "white"
        }}
      >
        订单
      </NavLink>
      <NavLink
        exact
        to="/add"
        className="headLink"
        activeStyle={{
          backgroundColor : "#2848ff",
          color : "white"
        }}
      >
        添加商品
      </NavLink>
    </nav>
  );
};

export default Header;
