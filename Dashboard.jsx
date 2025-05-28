import React from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './Dashboard.css';

function Dashboard() {
  return (
      <div>
        <Sidebar/>
        <div className='inputbrand'> 
            
          <h1>ADMIN PANEL</h1>
        </div>  
      </div> 
  );
}

export default Dashboard;