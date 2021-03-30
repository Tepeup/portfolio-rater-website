import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="dashboard">
      <header>
        <button class="nav-button" onClick={showSidebar}>
          <FaBars></FaBars>
        </button>
        <span>Tepeu Potter</span>
        <span>Logout</span>
      </header>
      <Navbar showSidebar={showSidebar} sidebar={sidebar}></Navbar>
      <main>
        <div className="one"></div>
      </main>
    </div>
  );
}
