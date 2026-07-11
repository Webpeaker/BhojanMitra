import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using BhojanMitra POS software ("Service"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of a business, you represent that you have authority to bind that entity to these terms.`
    },
    {
      title: '2. Description of Service',
      content: `BhojanMitra is a cloud-based restaurant Point-of-Sale (POS) platform offering features including:
      • Order management and KOT printing
      • Table management and QR ordering
      • Inventory and menu management
      • GST/VAT billing and reporting
      • Multi-outlet management
      • WhatsApp & marketing integrations`
    },
    {
      title: '3. Account Registration',
      content: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities occurring under your account. Notify us immediately at bhojanMitra@webpeaker.com if you suspect unauthorized use.`
    },
    {
      title: '4. Subscription & Billing',
      content: `• Subscriptions are billed monthly or annually as per your selected plan
      • All fees are exclusive of applicable taxes
      • Payments are non-refundable except as stated in our Refund Policy
      • We reserve the right to modify pricing with 30 days' prior notice
      • Failure to pay may result in service suspension`
    },
    {
      title: '5. Acceptable Use',
      content: `You agree not to:
      • Use the Service for any unlawful purpose or in violation of regulations
      • Attempt to reverse-engineer, hack, or compromise our systems
      • Resell or sublicense the Service without written consent
      • Upload malicious code, spam, or harmful content
      • Misrepresent your identity or business information`
    },
    {
      title: '6. Intellectual Property',
      content: `All intellectual property rights in the Service, including software, trademarks, logos, and content, belong to Webpeaker. You are granted a limited, non-exclusive, non-transferable license to use the Service during your subscription period.`
    },
    {
      title: '7. Data Ownership',
      content: `You retain full ownership of your business data (menus, transactions, customer records). We will not use your data for purposes beyond operating and improving the Service. Upon termination, we will provide an export of your data upon request within 30 days.`
    },
    {
      title: '8. Service Availability & SLA',
      content: `We target 99.9% uptime for our platform. Scheduled maintenance will be notified in advance. We are not liable for downtime caused by factors beyond our control (e.g., internet outages, force majeure).`
    },
    {
      title: '9. Limitation of Liability',
      content: `To the maximum extent permitted by law, BhojanMitra shall not be liable for any indirect, incidental, special, or consequential damages, including loss of revenue or profits. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.`
    },
    {
      title: '10. Termination',
      content: `Either party may terminate the agreement with 30 days' written notice. We may suspend or terminate your access immediately for material breach of these Terms. Upon termination, your right to access the Service ceases.`
    },
    {
      title: '11. Governing Law',
      content: `These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat, India.`
    },
    {
      title: '12. Changes to Terms',
      content: `We may modify these Terms at any time. Material changes will be communicated via email or in-app notice. Continued use of the Service after changes constitutes acceptance.`
    },
  ];

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-hero legal-hero--blue">
          <div className="container">
            <div className="legal-hero-tag">📋 Legal</div>
            <h1 className="legal-hero-title">Terms of <span>Service</span></h1>
            <p className="legal-hero-sub">
              Last updated: <strong>July 12, 2026</strong> &nbsp;·&nbsp; Effective Date: July 1, 2026
            </p>
            <p className="legal-hero-desc">
              Please read these Terms of Service carefully before using BhojanMitra. These terms govern your access to and use of our restaurant POS platform.
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="container legal-grid">
            <aside className="legal-toc">
              <h3>Contents</h3>
              <ul>
                {sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#tos-${i}`}>{s.title.replace(/^\d+\.\s/, '')}</a>
                  </li>
                ))}
              </ul>
            </aside>

            <main className="legal-content">
              {sections.map((s, i) => (
                <section id={`tos-${i}`} key={i} className="legal-section">
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

export default TermsOfService;
