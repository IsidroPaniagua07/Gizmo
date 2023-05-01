import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index/Index";
import "./main.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NavBar />
    {/* This container is used to set dimensions and flex-direction */}
    <div className="body-container">
      <SideBar />
      <Index />
    </div>
  </>
);
