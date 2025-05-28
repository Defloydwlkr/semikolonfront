import React from 'react';
import SKHeader from '../image/SK.header.jpg';
import background from '../image/d.png';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import HouseIcon from '@mui/icons-material/House'; // Ensure this is imported
import './Home.css';
import './Navbar.css';

function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />
      
      {/* Home Section */}
      <div id="home" className="home">
        <header>
          <img src={SKHeader} alt="SK Header" className="header-image" />
        </header>
      </div>

      {/* About Section */}
      <div id="about" className="about">
        <div className="about-content">
          <h2>ABOUT US</h2>
          <table>
            <tr>
              <th>
                <img src={background} alt="Cafe Decoration" className="about-header-image" />
              </th>
              <th>
                <tr>
                  <h2>Our cafe has been serving quality brews and delicious treats since 2020.</h2>
                </tr>
                <tr>
                  Whether you're here for a quick coffee or a leisurely afternoon, <br/>
                  we aim to make every visit special.
                </tr>
                <tr>
                  <a href="#location"><button>Find Us</button></a>
                </tr>
              </th>
              <th>
                <img src={background} alt="Cafe Decoration" className="about-header-image" />
              </th>
            </tr> 
          </table>
        </div>
      </div>
       
            {/* Menu Section */}
      <div id="menu" className="menu">
        <h2>Menu</h2>
        <section className="dashboard-content">
          <div className="dashboard-card">
            <h2>Menu Management</h2>
            <p>Create, update, and delete menu items.</p>
          </div>
          <div className="dashboard-card">
            <h2>User Management</h2>
            <p>Manage user accounts and permissions.</p>
          </div>
          <div className="dashboard-card">
            <h2>Restaurant Details</h2>
            <p>Update restaurant information and social media links.</p>
          </div>
        </section>
      </div>
      
           {/* Location Section */}
      <div id="location" className="location">
        <h2>Location</h2>
        <p>
          📍 Location
Semi Kolon Café is located{" "}
          <a
            href="https://www.google.com/maps/place/Espino+Street,+Solano,+Nueva+Vizcaya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>@semikoloncafé</span>
          </a>
           ,  nestled in a cozy spot within Solano. Whether you're a local resident or a traveler passing through, our cafe offers a warm and welcoming atmosphere for everyone. Easily accessible and surrounded by the town’s friendly vibe, it's the perfect place to enjoy a relaxing cup of coffee or a sweet treat. Come find us—we're always brewing something special for coffee lovers!
        </p>
        <div className="location-map">
                    <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2289385972053!2d121.18299429999999!3d16.514535800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390414f4c0f09ff%3A0xacd76a4270bdff03!2sEspino%20Street%2C%20Solano%2C%20Nueva%20Vizcaya!5e0!3m2!1sen!2sph!4v1748449216239!5m2!1sen!2sph" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Footer Section */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );

}

export default Home;