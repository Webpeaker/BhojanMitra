import {
  FaUserCheck, FaClipboardList, FaReceipt, FaChartLine,
  FaArrowRight, FaBolt, FaGift
} from 'react-icons/fa';
import './HowItWorks.css';

const steps = [
  {
    step: '01',
    icon: <FaUserCheck size={26} />,
    title: 'Sign Up in 2 Minutes',
    desc: 'Create your account online. No hardware, no installations, no tech headaches. Just your phone and internet.',
  },
  {
    step: '02',
    icon: <FaClipboardList size={26} />,
    title: 'Set Up Your Menu',
    desc: 'Add your dishes, set GST categories, and configure your restaurant in our simple guided setup wizard.',
  },
  {
    step: '03',
    icon: <FaReceipt size={26} />,
    title: 'Start Billing',
    desc: 'Take orders on your phone, print KOTs, manage tables, and generate GST invoices — all in seconds.',
  },
  {
    step: '04',
    icon: <FaChartLine size={26} />,
    title: 'Grow Smarter',
    desc: 'Use sales analytics, inventory alerts, and WhatsApp marketing to grow revenue and reduce waste.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-tag"><FaBolt size={11} /> Simple Setup</div>
          <h2 className="section-title">
            Live in <span>4 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            No technical knowledge required. If you can use WhatsApp, you can use BhojanMitra.
          </p>
        </div>

        <div className="steps-layout">
          <div className="steps-list">
            {steps.map((step, i) => (
              <div className="step-item" key={i}>
                <div className="step-number-wrap">
                  <div className="step-number">{step.step}</div>
                  {i < steps.length - 1 && <div className="step-connector"></div>}
                </div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hiw-visual">
            <div className="hiw-img-wrap">
              <picture>
                <source srcSet="/interior.webp" type="image/webp" />
                <img
                  src="/interior.png"
                  alt="Modern restaurant interior with BhojanMitra POS"
                  className="hiw-restaurant-img"
                  loading="lazy"
                  width="560"
                  height="400"
                />
              </picture>
              <div className="hiw-badge hiw-badge-1">
                <FaBolt size={18} color="#F5A623" />
                <div>
                  <strong>30 min</strong>
                  <span>Average setup time</span>
                </div>
              </div>
              <div className="hiw-badge hiw-badge-2">
                <FaGift size={18} color="#2D7D46" />
                <div>
                  <strong>Free Trial</strong>
                  <span>No card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
