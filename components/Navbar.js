import React from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar(props) {
  const SideBarData = [
    {
      title: "Home",
      path: "/",
      icon: "",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: "",
    },
    {
      title: "Recent",
      path: "/recent",
      icon: "",
    },
  ];

  return (
    <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
      <div class="nav-header">
        <div className="nav-logo">
          <img src="/Logo.svg" alt="Portfolio Rater" width="30" height="30" />
          <h4>Portfolio Rater</h4>
        </div>{" "}
        <button class="close-button" onClick={props.showSidebar}>
          <IoCloseSharp></IoCloseSharp>
        </button>
      </div>
      <ul>
        {SideBarData.map((item, index) => {
          return (
            <li keys={index} className="nav-item">
              {item.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
