import React from "react";
import { slide as Menu } from "react-burger-menu";


const SideNav = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Temperature
      </a>

      <a className="menu-item" href="/pizzas">
        Humidity
      </a>

      <a className="menu-item" href="/desserts">
        Dashboard
      </a>
    </Menu>
  )
}

export default SideNav;
