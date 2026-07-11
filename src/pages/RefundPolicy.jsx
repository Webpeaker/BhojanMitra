import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const RefundPolicy = () => {
  const scenarios = [
    {
      icon: '✅',
      title: 'Eligible for Full Refund',
      color: '#2D7D46',
      items: [
        'Service is completely inaccessible for >72 consecutive hours due to our fault',
        'You were charged twice for the same subscription period',
        'You cancel within 7 days of your first paid subscription (new customers only)',
        'Service features materially different from what was advertised',
      ]
    },
    {
      icon: '⚠️',
      title: 'Eligible for Partial Refund / Credit',
      color: '#F5A623',
      items: [
        'Annual plan cancelled after 30 days — pro-rated credit for unused months',
        'Service degradation lasting 24–72 hours — credit applied to next invoice',
        'Feature malfunction reported and unresolved within 14 days',
      ]
    },
    {
      icon: '❌',
      title: 'Not Eligible for Refund',
      color: '#E8541A',
      items: [
        'Monthly subscriptions cancelled mid-cycle (access continues until period end)',
        'Unused features or infrequent platform usage',
        'Issues caused by user error, third-party tools, or internet connectivity',
        'Add-on services (setup fees, training, custom development)',
        'Requests made after 30 days from the billing date',
      ]
    },
  ];

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-hero legal-hero--green">
          <div className="container">
            <div className="legal-hero-tag">💳 Legal</div>
            <h1 className="legal-hero-title">Refund <span>Policy</span></h1>
            <p className="legal-hero-sub">
              Last updated: <strong>July 12, 2026</strong> &nbsp;·&nbsp; Effective Date: July 1, 2026
            </p>
            <p className="legal-hero-desc">
              We believe in our product and want you to be completely satisfied. Here's our clear, fair refund policy.
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="container" style={{ maxWidth: 860 }}>
            {/* Scenarios */}
            <div className="refund-scenarios">
              {scenarios.map((sc, i) => (
                <div key={i} className="refund-card" style={{ '--sc-color': sc.color }}>
                  <div className="refund-card-header">
                    <span className="refund-icon">{sc.icon}</span>
                    <h3>{sc.title}</h3>
                  </div>
                  <ul>
                    {sc.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="refund-process">
              <h2>How to Request a Refund</h2>
              <div className="refund-steps">
                {[
                  { step: '01', title: 'Contact Support', desc: 'Email bhojanMitra@webpeaker.com with subject "Refund Request – [Your Business Name]"' },
                  { step: '02', title: 'Provide Details', desc: 'Include your registered email, invoice number, reason for refund, and any relevant screenshots.' },
                  { step: '03', title: 'Review (3–5 Days)', desc: 'Our team reviews your request and responds within 3–5 business days.' },
                  { step: '04', title: 'Resolution', desc: 'Approved refunds are processed within 7–10 business days to the original payment method.' },
                ].map((s, i) => (
                  <div key={i} className="refund-step">
                    <div className="refund-step-num">{s.step}</div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="refund-cta">
              <h3>Still have questions?</h3>
              <p>Our support team is available 7 days a week to help resolve any billing issues.</p>
              <a href="mailto:bhojanMitra@webpeaker.com" className="btn-primary">
                <span>📧 Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
