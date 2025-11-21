import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        
        {/* Social Icons Centered */}
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:Nudamkethaka@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
          {/* Added Instagram just in case, easy to remove if you don't want it */}
          <a href="#" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>

        {/* Text Centered */}
        <div className="footer-copyright">
          <p>© 2024 Nudam Kethaka.</p>
          <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Designed & Built in Sri Lanka.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;