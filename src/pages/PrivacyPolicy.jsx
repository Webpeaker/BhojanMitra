import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This includes:
      • Business name, owner name, and contact information
      • Billing and payment details (processed securely via third-party gateways)
      • Restaurant configuration data (menu, tables, pricing)
      • Transaction and order history
      • Device and usage data (IP address, browser type, pages visited)`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:
      • Provide, maintain, and improve our POS services
      • Process payments and send billing-related communications
      • Send product updates, promotional offers, and support messages
      • Monitor system performance and detect fraudulent activity
      • Comply with legal obligations`
    },
    {
      title: '3. Data Sharing & Disclosure',
      content: `We do not sell or rent your personal data. We may share information with:
      • Trusted service providers who assist in operating our platform (payment processors, cloud hosting)
      • Law enforcement or regulatory bodies when legally required
      • Business partners with your explicit consent`
    },
    {
      title: '4. Data Security',
      content: `BhojanMitra employs industry-standard security measures including:
      • 256-bit SSL/TLS encryption for all data in transit
      • AES-256 encryption for stored sensitive data
      • Regular security audits and penetration testing
      • Role-based access controls and multi-factor authentication`
    },
    {
      title: '5. Data Retention',
      content: `We retain your data for as long as your account is active or as needed to provide services. Upon account termination, data is deleted within 90 days unless legally required to retain it longer.`
    },
    {
      title: '6. Cookies & Tracking',
      content: `We use cookies and similar technologies to enhance your experience, analyse usage, and deliver relevant communications. You can control cookie preferences via your browser settings.`
    },
    {
      title: '7. Your Rights (GDPR / Data Protection)',
      content: `Depending on your location, you may have the right to:
      • Access and receive a copy of your data
      • Correct inaccurate personal information
      • Request deletion of your data ("right to be forgotten")
      • Restrict or object to processing
      • Data portability
      
      To exercise these rights, email us at: bhojanMitra@webpeaker.com`
    },
    {
      title: '8. Children\'s Privacy',
      content: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal data from minors.`
    },
    {
      title: '9. Changes to This Policy',
      content: `We may update this Privacy Policy periodically. We will notify you of material changes via email or in-app notifications at least 7 days before the changes take effect.`
    },
    {
      title: '10. Contact Us',
      content: `For privacy-related questions or requests:
      Email: bhojanMitra@webpeaker.com
      Phone: +91 8000-77-8246
      Address: Webpeaker Technologies, India`
    },
  ];

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <div className="legal-hero-tag">🔒 Legal</div>
            <h1 className="legal-hero-title">Privacy <span>Policy</span></h1>
            <p className="legal-hero-sub">
              Last updated: <strong>July 12, 2026</strong> &nbsp;·&nbsp; Effective Date: July 1, 2026
            </p>
            <p className="legal-hero-desc">
              At BhojanMitra (by Webpeaker), we are committed to protecting your privacy and handling your data with the highest standards of security and transparency.
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="container legal-grid">
            {/* TOC Sidebar */}
            <aside className="legal-toc">
              <h3>Contents</h3>
              <ul>
                {sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`}>{s.title.replace(/^\d+\.\s/, '')}</a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main content */}
            <main className="legal-content">
              {sections.map((s, i) => (
                <section id={`section-${i}`} key={i} className="legal-section">
                  <h2>{s.title}</h2>
                  <p style={{ whiteSpace: 'pre-line' }}>{s.content}</p>
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
