import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import HouseIcon from '@mui/icons-material/House';
import './Footer.css';
import './Home.css';

function Footer() {
  return (
    <footer id="social-media" className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100086590365855" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
          <span>@semikoloncafé </span>
        </a>
        <a href="https://www.instagram.com/semi.kolon_cafe/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
          <span>@semi.kolon_cafe</span>
        </a>
        <a href="mailto:semikoloncafe@gmail.com">
          <EmailIcon />
          <span>semikoloncafe@gmail.com</span>
        </a>
        <a href="https://www.google.com/maps/place/Solano,+Nueva+Vizcaya/" target="_blank" rel="noopener noreferrer">
          <PlaceIcon />
          <span>Solano, Philippines</span>
        </a>
        <a href="tel:09850906194">
          <CallIcon />
          <span>09850906194</span>
        </a>
        <a href="https://www.google.com/maps/place/Espino+Street,+Solano,+Nueva+Vizcaya/" target="_blank" rel="noopener noreferrer">
          <HouseIcon />
          <span>@semikoloncafé </span>
        </a>
      </div>
      <p>Follow us on our social channels for the latest updates and special offers. &copy;2023 Semi Kolon Café. All rights reserved.</p>
      <p></p>
    </footer>
  );
}

export default Footer;