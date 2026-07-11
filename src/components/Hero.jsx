import {
  FaRocket, FaStar, FaGift, FaDollarSign, FaArrowRight, FaPlayCircle,
  FaUsers, FaCheckCircle, FaGlobe
} from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <FaGlobe size={12} />
            <span>Trusted by 800+ Restaurants Worldwide</span>
          </div>

          <h1 className="hero-title">
            World's Smartest
            <span className="gradient-text"> Ordering System</span>
            <br />
            <span className="price-highlight">$2</span>
            <span className="price-sep"> / </span>
            <span className="price-highlight-inr">₹99</span>
            <span className="price-mo-label"> per month</span>
          </h1>

          <p className="hero-desc">
            Complete restaurant management with fast billing, KOT printing, table management,
            QR menu ordering & real-time analytics. Run your restaurant smarter — anywhere in the world.
          </p>

          <div className="hero-stats">
            {[
              { value: '800+', label: 'Restaurants', icon: <FaUsers size={18} /> },
              { value: '4.8', label: 'Star Rating', icon: <FaStar size={18} /> },
              { value: '1 Month', label: 'Free Trial', icon: <FaGift size={18} /> },
              { value: '$2/mo', label: 'Starting', icon: <FaDollarSign size={18} /> },
            ].map(stat => (
              <div className="hero-stat" key={stat.label}>
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-ctas">
            <a href="#pricing" className="btn-primary">
              <FaGift size={15} />
              <span>Start Free Trial</span>
            </a>
            <a href="#features" className="btn-secondary-hero">
              <FaPlayCircle size={18} />
              <span>See How It Works</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <img src="/owner.png" alt="Restaurant owner" className="trust-img" />
            </div>
            <p><strong>500+ new restaurants</strong> joined this month</p>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img
              src="/dashboard.png"
              alt="BhojanMitra Restaurant POS Dashboard"
              className="hero-dashboard-img"
            />
            <div className="floating-badge badge-pos">
              <div className="fb-icon-wrap">
                <FaCheckCircle color="#22C55E" size={22} />
              </div>
              <div>
                <strong>Mobile POS</strong>
                <span>Works on any device</span>
              </div>
            </div>
            <div className="floating-badge badge-gst">
              <div className="fb-icon-wrap">
                <FaCheckCircle color="#E8541A" size={22} />
              </div>
              <div>
                <strong>QR Ordering</strong>
                <span>No app needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="#F9F4F0"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
