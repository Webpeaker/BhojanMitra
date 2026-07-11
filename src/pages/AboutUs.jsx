import {
  FaRocket, FaStore, FaGlobe, FaStar, FaDollarSign, FaBolt,
  FaConciergeBell, FaChartBar, FaQrcode, FaPrint, FaWhatsapp,
  FaShieldAlt, FaLayerGroup, FaMobileAlt, FaCheck, FaClock,
  FaUsers, FaHeadset, FaArrowRight
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';
import './AboutUs.css';

const stats = [
  { icon: <FaStore />, value: '100+', label: 'Restaurants Worldwide' },
  { icon: <FaGlobe />, value: '40+',  label: 'Countries' },
  { icon: <FaDollarSign />, value: '$2M+', label: 'Processed Monthly' },
  { icon: <FaStar />,  value: '4.8/5', label: 'Customer Rating' },
  { icon: <FaBolt />,  value: '99.9%', label: 'Uptime SLA' },
  { icon: <FaHeadset />, value: '5 min', label: 'Avg. Support Response' },
];

const features = [
  { icon: <FaQrcode />, title: 'QR Self-Ordering', desc: 'Guests scan, order, and pay from their phone — no app download needed. Reduce wait staff load by 40%.' },
  { icon: <FaPrint />, title: 'KOT Printing', desc: 'Auto-print kitchen order tickets to any printer the moment an order is placed. Zero missed orders.' },
  { icon: <FaChartBar />, title: 'Real-Time Analytics', desc: 'Track sales, revenue, item performance, and staff productivity live — from any device, anywhere.' },
  { icon: <FaLayerGroup />, title: 'Multi-Outlet Management', desc: 'Manage all your restaurant branches from one dashboard. Unified menu, staff, and reporting.' },
  { icon: <FaWhatsapp />, title: 'WhatsApp Marketing', desc: 'Send automated promos, order confirmations, and feedback requests directly via WhatsApp.' },
  { icon: <FaShieldAlt />, title: 'GST / VAT Billing', desc: 'Auto-calculated taxes for every order. One-click GST reports ready for filing — fully compliant.' },
  { icon: <FaMobileAlt />, title: 'Works on Any Device', desc: 'No dedicated hardware needed. Run BhojanMitra on your existing Android phone, tablet, or browser.' },
  { icon: <FaConciergeBell />, title: 'Table Management', desc: 'Visual table map, real-time status, seat merging, and reservation handling — all in one screen.' },
];

const restaurantTypes = [
  'Fine Dining', 'Cafés & Bakeries', 'Cloud Kitchens', 'QSRs / Fast Food',
  'Food Trucks', 'Bars & Lounges', 'Multi-Outlet Chains', 'Casual Dining', 'Hotels & Resorts',
];

const whys = [
  { icon: <FaClock />, title: 'Live in 5 Minutes', desc: 'No hardware purchase, no installer, no tech team. Sign up and start billing in under 5 minutes.' },
  { icon: <FaDollarSign />, title: 'Starts at $9/Month', desc: 'Full-featured plan for the price of a coffee. No per-device fees. No hidden charges. Cancel anytime.' },
  { icon: <FaGlobe />, title: 'Works Globally', desc: 'Multi-currency support, language options, and GST/VAT for 40+ countries. Built for the world.' },
  { icon: <FaHeadset />, title: '7-Day Support', desc: 'Real humans answer in under 5 minutes via chat, WhatsApp, or email — every day of the week.' },
];

const AboutUs = () => (
  <>
    <Navbar />
    <div className="static-page">

      {/* Hero */}
      <div className="static-hero">
        <div className="container">
          <div className="static-hero-tag">
            <FaConciergeBell size={12} /> About BhojanMitra
          </div>
          <h1 className="static-hero-title">
            The Complete POS for<br /><span>Every Restaurant</span>
          </h1>
          <p className="static-hero-desc">
            BhojanMitra is a cloud-based restaurant management platform that replaces paper KOTs, slow billing, and disconnected tools — with one fast, affordable, and beautifully simple system.
          </p>
        </div>
      </div>

      <div className="static-body">
        <div className="container">

          {/* Stats */}
          <div className="about-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-card">
                <div className="asc-icon">{s.icon}</div>
                <span className="asc-value">{s.value}</span>
                <span className="asc-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* What is it */}
          <div className="about-intro">
            <div className="about-intro-text">
              <span className="section-tag"><FaRocket size={11} /> What is BhojanMitra?</span>
              <h2 className="section-title">One platform.<br /><span>Everything your restaurant needs.</span></h2>
              <p className="section-subtitle">
                BhojanMitra is a cloud POS system designed for restaurants of all sizes — from a single outlet to 50+ branch chains. It handles billing, ordering, inventory, analytics, and marketing in one place.
              </p>
              <ul className="about-checklist">
                {[
                  'Take orders on any phone or tablet',
                  'Auto-print KOTs to kitchen printers',
                  'Generate GST/VAT invoices in one tap',
                  'Let guests order via QR code (no app needed)',
                  'Track sales, costs & profits in real time',
                  'Manage inventory and avoid wastage',
                  'Run WhatsApp promos to repeat customers',
                  'Control all outlets from one dashboard',
                ].map((item, i) => (
                  <li key={i}><FaCheck size={12} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="about-intro-visual">
              <picture>
                <source srcSet="/dashboard.webp" type="image/webp" />
                <img src="/dashboard.png" alt="BhojanMitra POS Dashboard" className="about-dashboard-img" loading="lazy" />
              </picture>
            </div>
          </div>

          {/* Features Grid */}
          <div className="about-features-section">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>
              Everything <span>Included</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              Every plan includes all features. No add-ons, no surprises.
            </p>
            <div className="about-features-grid">
              {features.map((f, i) => (
                <div key={i} className="about-feature-card">
                  <div className="afc-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for */}
          <div className="about-for-section">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 24 }}>
              Built for <span>Every Type</span> of Restaurant
            </h2>
            <div className="about-types-wrap">
              {restaurantTypes.map((type, i) => (
                <div key={i} className="about-type-chip">
                  <FaStore size={12} />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose */}
          <div className="about-why-grid">
            {whys.map((w, i) => (
              <div key={i} className="about-why-card">
                <div className="awc-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about-cta">
            <h2>Start your free 30-day trial today</h2>
            <p>No credit card required. Full access to all features. Setup in under 5 minutes.</p>
            <div className="about-cta-btns">
              <a href="#contact" className="btn-primary">
                <FaRocket size={13} />
                <span>Get Started Free</span>
              </a>
              <a href="/experience" className="btn-secondary">
                <FaArrowRight size={13} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default AboutUs;
