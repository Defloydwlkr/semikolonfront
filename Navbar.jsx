import React from 'react';
import { useNavigate } from 'react-router-dom';
import d from '../image/d.png';
import LoginIcon from '@mui/icons-material/Login';
import './Navbar.css';
import './Home.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="navbar">
      <table className="navbar-table">
        <tbody>
          <tr>
            <td className="nav-item logo-cell">
              <img src={d} alt="Semi Logo" className="navbar-logo" />                
            </td>
            <td className="nav-item">
              <a href="#home">Home</a>
            </td>
            <td className="nav-item">
              <a href="#about">About</a>
            </td>
            <td className="nav-item">
              <a href="#menu">Menu</a>
            </td>
            
            <td className="nav-item">
              <a href="#location">Location</a>
            </td>
            
            <td>
              <button className="login" onClick={handleLogin}>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Navbar;