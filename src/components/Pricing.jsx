import { useState } from 'react';
import { FaDollarSign, FaArrowRight, FaCheck, FaFire, FaWhatsapp, FaMobileAlt, FaTools, FaGlobe, FaRupeeSign } from 'react-icons/fa';
import './Pricing.css';

const proFeatures = [
  'Unlimited orders & billing',
  'Tax-compliant invoicing',
  'KOT printing to kitchen printer',
  'Table management & floor plan',
  'QR code ordering (no app needed)',
  'Digital QR menu with photos',
  'Real-time menu updates',
  'Multi-device access',
  'Sales reports & analytics',
  'Cloud backup & sync',
  'Customer feedback via QR',
  'Priority support',
];

const Pricing = () => {
  const [currency, setCurrency] = useState('INR'); // default INR
  const isINR = currency === 'INR';

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-tag">
            <FaDollarSign size={11} /> Simple Pricing
          </div>
          <h2 className="section-title">
            One Plan. <span>Everything Included.</span>
          </h2>
          <p className="section-subtitle">
            No hidden fees. No feature locks. Get the complete BhojanMitra experience from day one — anywhere in the world.
          </p>
        </div>

        <div className="pricing-single-wrap">
          {/* Left: Value props */}
          <div className="pricing-left-panel">
            <div className="pricing-why-title">Why restaurants choose BhojanMitra</div>
            <div className="pricing-why-list">
              {[
                { icon: <FaDollarSign size={18} color="#E8541A" />, title: 'Save $300–$800/month', desc: 'Compared to traditional POS systems costing $300–$800/month globally.' },
                { icon: <FaMobileAlt size={18} color="#2D7D46" />, title: 'Works on any device', desc: 'No expensive hardware needed. Use your existing phone, tablet, or desktop.' },
                { icon: <FaGlobe size={18} color="#F59E0B" />, title: 'Built for restaurants worldwide', desc: 'Multi-currency, multi-language menu, and local tax support for any country.' },
                { icon: <FaTools size={18} color="#8B5CF6" />, title: '30-minute setup', desc: 'Our team sets up your account and trains your staff in under 30 minutes.' },
              ].map((w, i) => (
                <div className="pricing-why-item" key={i}>
                  <div className="pwi-icon">{w.icon}</div>
                  <div>
                    <strong>{w.title}</strong>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pricing-guarantee">
              <FaCheck size={16} color="#2D7D46" />
              <span>30-day money-back guarantee. Cancel anytime.</span>
            </div>
          </div>

          {/* Right: Pro Plan Card */}
          <div className="pricing-card-single">
            <div className="plan-badge-top">
              <FaFire size={14} /> Most Popular Plan
            </div>

            <div className="plan-single-header">
              <div className="plan-single-icon">
                <FaFire size={32} color="#E8541A" />
              </div>
              <div>
                <h3 className="plan-name-single">Pro Plan</h3>
                <p className="plan-desc-single">Everything you need to run a great restaurant</p>
              </div>
            </div>

            {/* ── Currency Toggle ── */}
            <div className="currency-toggle-wrap">
              <span className={`toggle-label ${isINR ? 'active' : ''}`}>
                <FaRupeeSign size={11} /> INR
              </span>
              <button
                className={`currency-toggle-btn ${!isINR ? 'usd-active' : ''}`}
                onClick={() => setCurrency(isINR ? 'USD' : 'INR')}
                aria-label="Toggle currency"
              >
                <span className="toggle-thumb"></span>
              </button>
              <span className={`toggle-label ${!isINR ? 'active' : ''}`}>
                <FaDollarSign size={11} /> USD
              </span>
            </div>

            {/* ── Price Display ── */}
            <div className="plan-price-block">
              <div className="plan-price-main">
                <span className="price-currency">{isINR ? '₹' : '$'}</span>
                <span className="price-number">{isINR ? '99' : '2'}</span>
                <span className="price-mo">/mo</span>
              </div>
              <div className="price-annual-note">
                {isINR
                  ? <>Or <strong>₹990/year</strong> — save 2 months free</>
                  : <>Or <strong>$20/year</strong> — save 2 months free</>
                }
              </div>
            </div>

            <div className="plan-divider"></div>

            <ul className="plan-features-single">
              {proFeatures.map((feat, j) => (
                <li key={j}>
                  <FaCheck size={13} color="#E8541A" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="plan-cta-group">
              <a href="#contact" className="btn-primary plan-cta-primary">
                <FaArrowRight size={14} />
                <span>Get Started — {isINR ? '₹99/mo' : '$2/mo'}</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="plan-cta-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={16} />
                <span>Talk to us first</span>
              </a>
            </div>

            <p className="plan-fine-print">
              Setup assistance included. Works on Android, iOS & Desktop. Available worldwide.
            </p>
          </div>
        </div>

        <div className="pricing-note">
          <FaCheck size={12} style={{ color: '#2D7D46' }} />
          <span>Secure payment &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Available worldwide &nbsp;·&nbsp; Multi-currency</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
