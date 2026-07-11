import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowRight, FaRocket } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // On inner pages (not home/experience), navbar should always be in "scrolled" style
  // because there's no dark hero behind it
  const isInnerPage = !['/', '/experience'].includes(location.pathname);

  useEffect(() => {
    // On inner pages always start as scrolled; on home respond to scroll
    if (isInnerPage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // run once immediately
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInnerPage]);

  const navLinks = [
    { label: 'Features',     href: isInnerPage ? '/#features'     : '#features' },
    { label: 'Pricing',      href: isInnerPage ? '/#pricing'      : '#pricing' },
    { label: 'Testimonials', href: isInnerPage ? '/#testimonials' : '#testimonials' },
    { label: 'FAQ',          href: isInnerPage ? '/#faq'          : '#faq' },
    { label: 'Contact',      href: isInnerPage ? '/#contact'      : '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="/" className="navbar-logo">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="BhojanMitra Logo" className="navbar-logo-img" loading="eager" fetchPriority="high" />
          </picture>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="/experience" className="btn-nav-demo">
            <FaRocket size={12} /> Live Demo
          </a>
          <a href={isInnerPage ? '/#pricing' : '#pricing'} className="btn-nav-outline">Free Trial</a>
          <a href={isInnerPage ? '/#contact' : '#contact'} className="btn-nav-primary">
            <span>Get Started</span>
            <FaArrowRight size={13} />
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="/experience" className="mobile-demo-link" onClick={() => setMenuOpen(false)}>
            <FaRocket size={12} /> Live Demo
          </a>
          <a href={isInnerPage ? '/#contact' : '#contact'} className="mobile-cta">Get Started Free</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
