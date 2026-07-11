import {
  FaInstagram, FaYoutube, FaTwitter, FaLinkedin,
  FaEnvelope, FaPhone, FaGlobe, FaStar
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Product: ['Features', 'Pricing', 'QR Ordering', 'KOT Printing', 'GST Billing', 'WhatsApp Marketing'],
    Solutions: ['Fine Dining', 'Cafés & Bakeries', 'Cloud Kitchens', 'QSRs', 'Food Trucks', 'Multi-Outlet Chains'],
    Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partner Program', 'Affiliate'],
    Support: ['Help Center', 'Documentation', 'Video Tutorials', 'Contact Us', 'System Status', 'Terms & Privacy'],
  };

  const socials = [
    { icon: <FaInstagram size={17}/>, label: 'Instagram', href: 'https://instagram.com' },
    { icon: <FaYoutube size={17}/>, label: 'YouTube', href: 'https://youtube.com' },
    { icon: <FaTwitter size={17}/>, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <FaLinkedin size={17}/>, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="BhojanMitra" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              World's most affordable and complete restaurant ordering system. Trusted by 800+ restaurants in 40+ countries.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="social-link" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="footer-contact-info">
              <a href="mailto:bhojanMitra@webpeaker.com" className="footer-contact-link">
                <FaEnvelope size={12} />
                <span>bhojanMitra@webpeaker.com</span>
              </a>
              <a href="tel:+918000778246" className="footer-contact-link">
                <FaPhone size={12} />
                <span>+91 8000-77-8246</span>
              </a>
            </div>

            <div className="footer-badges">
              <div className="footer-badge">
                <FaGlobe size={11} color="var(--primary-light)" />
                <span>Available Worldwide</span>
              </div>
              <div className="footer-badge">
                <FaStar size={11} color="#F5A623" />
                <span>4.8 Rated</span>
              </div>
            </div>
          </div>

          <div className="footer-links-grid">
            {Object.entries(links).map(([category, items]) => (
              <div className="footer-link-col" key={category}>
                <h4>{category}</h4>
                <ul>
                  {items.map(item => (
                    <li key={item}>
                      <a href="#home">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} BhojanMitra by Webpeaker. All rights reserved. Available worldwide.</p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
            <a href="#home">Refund Policy</a>
          </div>
        </div>
        <div className="footer-powered">
          <span>Powered by</span>
          <img src="/webpeaker.png" alt="Webpeaker" className="webpeaker-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
