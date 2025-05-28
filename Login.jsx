import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true); // true for login, false for sign-up
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert your authentication logic based on isLogin flag here.
    setIsOpen(false);
    navigate('/dashboard');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={handleClose}>&times;</button>
            <form onSubmit={handleSubmit} className="login-form">
              {isLogin ? (
                <>
                  <h2>Admin Login</h2>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" required />
                  </div>
                  <button type="submit" className="login-btn">Login</button>
                  <p className="toggle-text">
                    Don't have an account?{' '}
                    <span className="toggle-link" onClick={toggleForm}>Sign Up</span>
                  </p>
                </>
              ) : (
                <>
                  <h2>Admin Sign Up</h2>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" required />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm password" required />
                  </div>
                  <button type="submit" className="login-btn">Sign Up</button>
                  <p className="toggle-text">
                    Already have an account?{' '}
                    <span className="toggle-link" onClick={toggleForm}>Login</span>
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;