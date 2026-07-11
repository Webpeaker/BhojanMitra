import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';
import './HelpCenter.css';

const categories = [
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: 'Set up your account, add your menu, and take your first order.',
    articles: ['How to create your BhojanMitra account', 'Setting up your restaurant profile', 'Adding menu categories and items', 'Connecting a receipt printer (KOT)', 'Onboarding your staff'],
  },
  {
    icon: '🍽️',
    title: 'Orders & Tables',
    desc: 'Managing orders, tables, and the kitchen display system.',
    articles: ['Taking a dine-in order', 'How to split bills', 'Setting up QR code ordering for guests', 'Using the kitchen display system (KDS)', 'Managing table reservations'],
  },
  {
    icon: '💳',
    title: 'Billing & Payments',
    desc: 'GST invoices, payment gateways, and multi-currency.',
    articles: ['How GST is calculated on food items', 'Accepting UPI and card payments', 'Setting up multi-currency pricing', 'Generating and emailing invoices', 'Handling refunds at POS'],
  },
  {
    icon: '📊',
    title: 'Reports & Analytics',
    desc: 'Understand your sales, profit, and restaurant performance.',
    articles: ['Daily sales summary report', 'Understanding the profit & loss view', 'Item-wise sales report', 'Staff performance tracking', 'Exporting reports to Excel'],
  },
  {
    icon: '📦',
    title: 'Inventory',
    desc: 'Track stock levels, wastage, and vendor purchase orders.',
    articles: ['Setting up your inventory items', 'Low-stock alerts and notifications', 'Recording wastage and spoilage', 'Creating purchase orders', 'Linking menu items to inventory'],
  },
  {
    icon: '⚙️',
    title: 'Account & Settings',
    desc: 'Manage your subscription, team, and integrations.',
    articles: ['Adding and managing staff accounts', 'Changing your subscription plan', 'Integrating WhatsApp for marketing', 'API access and webhooks', 'Multi-outlet setup guide'],
  },
];

const HelpCenter = () => {
  return (
    <>
      <Navbar />
      <div className="static-page">
        <div className="static-hero">
          <div className="container">
            <div className="static-hero-tag">🆘 Support</div>
            <h1 className="static-hero-title">Help <span>Center</span></h1>
            <p className="static-hero-desc">
              Find answers, tutorials, and guides to get the most out of BhojanMitra.
            </p>
            {/* Search */}
            <div className="help-search">
              <span className="help-search-icon">🔍</span>
              <input type="text" placeholder="Search help articles... (e.g. 'set up KOT printer')" />
            </div>
          </div>
        </div>

        <div className="static-body">
          <div className="container">

            {/* Category grid */}
            <div className="help-grid">
              {categories.map((cat, i) => (
                <div key={i} className="help-cat-card">
                  <div className="help-cat-icon">{cat.icon}</div>
                  <h3>{cat.title}</h3>
                  <p className="help-cat-desc">{cat.desc}</p>
                  <ul className="help-articles">
                    {cat.articles.map((art, j) => (
                      <li key={j}>
                        <a href="#">{art}</a>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="help-see-all">See all articles →</a>
                </div>
              ))}
            </div>

            {/* Contact support */}
            <div className="help-contact">
              <div className="help-contact-item">
                <span>💬</span>
                <div>
                  <h4>Live Chat</h4>
                  <p>Chat with our support team — average response: 5 minutes</p>
                  <a href="#contact" className="btn-primary" style={{ marginTop: 12, display: 'inline-flex' }}><span>Start Chat</span></a>
                </div>
              </div>
              <div className="help-contact-divider" />
              <div className="help-contact-item">
                <span>📧</span>
                <div>
                  <h4>Email Support</h4>
                  <p>Send a detailed query and we'll respond within 4 hours.</p>
                  <a href="mailto:bhojanMitra@webpeaker.com" className="btn-secondary" style={{ marginTop: 12, display: 'inline-flex' }}>Email Us</a>
                </div>
              </div>
              <div className="help-contact-divider" />
              <div className="help-contact-item">
                <span>📹</span>
                <div>
                  <h4>Video Tutorials</h4>
                  <p>Step-by-step video guides for every feature we offer.</p>
                  <a href="#" className="btn-secondary" style={{ marginTop: 12, display: 'inline-flex' }}>Watch Videos</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
