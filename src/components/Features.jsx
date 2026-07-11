import {
  FaFileInvoiceDollar, FaPrint, FaChair, FaQrcode,
  FaChartBar, FaArrowRight, FaUtensils, FaLanguage,
  FaBell, FaEdit, FaStar, FaMobileAlt
} from 'react-icons/fa';
import './Features.css';

const featuresData = [
  {
    icon: <FaFileInvoiceDollar />,
    title: 'Fast Billing',
    desc: 'Generate professional bills instantly. Split bills, apply discounts, and accept UPI, cash or card payments in seconds.',
    color: '#E8541A',
  },
  {
    icon: <FaPrint />,
    title: 'KOT Printing',
    desc: 'Send Kitchen Order Tickets to the kitchen printer or display automatically. Zero confusion, faster service.',
    color: '#2D7D46',
  },
  {
    icon: <FaChair />,
    title: 'Table Management',
    desc: 'Visual floor plan for dine-in. See which tables are occupied, free, or reserved in real-time.',
    color: '#F5A623',
  },
  {
    icon: <FaQrcode />,
    title: 'QR Code Ordering',
    desc: 'Customers scan a QR code and order from their phone. No app download required. Reduce staff workload instantly.',
    color: '#8B5CF6',
  },
  {
    icon: <FaUtensils />,
    title: 'Digital QR Menu',
    desc: 'Beautiful interactive digital menu accessible via QR code. Add photos, descriptions and prices — update anytime instantly.',
    color: '#0EA5E9',
  },
  {
    icon: <FaEdit />,
    title: 'Real-time Menu Updates',
    desc: 'Mark items as sold out, change prices, or add daily specials from your phone. Customers see changes instantly.',
    color: '#EF4444',
  },
  {
    icon: <FaBell />,
    title: 'Smart Order Notifications',
    desc: 'Get instant alerts for every new order placed via QR menu. Staff notified on screen, kitchen notified via KOT.',
    color: '#22C55E',
  },
  {
    icon: <FaLanguage />,
    title: 'Multi-language Menu',
    desc: 'Display your QR menu in Hindi, English, and regional languages. Serve every customer in their preferred language.',
    color: '#F59E0B',
  },
  {
    icon: <FaStar />,
    title: 'Customer Feedback via QR',
    desc: 'Collect ratings and reviews from customers right at the table via QR code. Improve service based on real feedback.',
    color: '#EC4899',
  },
  {
    icon: <FaMobileAlt />,
    title: 'No-Contact Ordering',
    desc: 'Hygienic contactless dining — customers browse menu, order & pay from their phone without touching anything.',
    color: '#6366F1',
  },
  {
    icon: <FaQrcode />,
    title: 'Custom QR Branding',
    desc: 'Generate branded QR codes with your logo and restaurant colors. Place on tables, menus, or display boards.',
    color: '#14B8A6',
  },
  {
    icon: <FaChartBar />,
    title: 'Sales Reports & Analytics',
    desc: 'Daily, weekly & monthly reports. Know your bestsellers, peak hours, and top customers at a glance.',
    color: '#8B5CF6',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <div className="section-tag">
            <FaChartBar size={12} /> Powerful Features
          </div>
          <h2 className="section-title">
            Everything Your Restaurant <span>Needs to Thrive</span>
          </h2>
          <p className="section-subtitle">
            From billing to QR ordering to customer engagement — BhojanMitra covers it all in one affordable platform.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index} style={{ '--accent-color': feature.color }}>
              <div className="feature-icon-wrap">
                <span className="feature-icon">{feature.icon}</span>
                <div className="feature-icon-glow"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="feature-learn">
                Learn more <FaArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta-block">
          <div className="features-cta-inner">
            <div className="cta-left">
              <h3>Ready to streamline your restaurant?</h3>
              <p>Get full access — 1 month free. No credit card required.</p>
            </div>
            <a href="#pricing" className="btn-primary">
              <FaArrowRight size={14} />
              <span>Start Free Trial</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
