import { Link } from "react-router-dom";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar-links">
        <Link to="/dashboard">
          <HomeIcon /> DASHBOARD
        </Link>
        <Link to="/menu">
          <HomeIcon /> MENU
        </Link>
        <Link to="/manageuser">
          <ManageAccountsIcon /> MANAGE USER
        </Link>
        <Link to="/logout">
          <ManageAccountsIcon /> LOGOUT
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;