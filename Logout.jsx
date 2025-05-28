import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar"; // Added Sidebar import
import "./Logout.css";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("user"); // Clear user data
            navigate("/"); // Redirect to the login or home page
        }
    };

    return (
        <div className="logout-container">
            <Sidebar />
            <div className="logout-box">
                <h3 className="logout-message">Are you sure you want to log out?</h3>
                <div className="button-container">
                    <button onClick={handleLogout} className="logout-button">LOGOUT</button>
                    <button onClick={() => navigate(-1)} className="cancel-button">CANCEL</button>
                </div>
            </div>
        </div>
    );
}

export default Logout;