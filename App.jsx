import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Manageuser from './pages/ManageUser'; // Corrected import path
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manageuser" element={<Manageuser />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;