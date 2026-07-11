import { FaQuestionCircle, FaWhatsapp, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'How much does BhojanMitra restaurant software cost?',
    a: 'BhojanMitra costs $4.99 per month on the Pro plan (also available at ₹399/month). We also offer an annual plan at $49/year — saving 2 months. All new restaurants get 1 month free — no credit card required.',
  },
  {
    q: 'Does BhojanMitra work on mobile phones and tablets?',
    a: 'Yes! BhojanMitra runs natively on Android and iOS phones, tablets, and desktop computers worldwide. You don\'t need heavy POS hardware — your existing smartphone or tablet can act as a full billing terminal.',
  },
  {
    q: 'Which types of restaurants can use BhojanMitra?',
    a: 'BhojanMitra is built for all types — fine dining, QSRs, cafés, cloud kitchens, bakeries, bars, food trucks, and casual dining restaurants. It\'s used in 40+ countries across 6 continents.',
  },
  {
    q: 'Does BhojanMitra support QR menu ordering?',
    a: 'Yes! BhojanMitra includes a full digital QR menu system — customers scan a QR code to view your menu, place orders, and even pay. No app download required. Menus support multiple languages and currencies.',
  },
  {
    q: 'Does BhojanMitra support multiple currencies and languages?',
    a: 'Yes. BhojanMitra supports multiple currencies ($, £, €, ₹, AED, and more) and multi-language menus so you can serve customers in their preferred language regardless of where your restaurant is located.',
  },
  {
    q: 'Is my restaurant data secure with BhojanMitra?',
    a: 'Absolutely. All data is encrypted and stored securely on cloud servers with 99.9% uptime. Automatic daily backups ensure you never lose your sales history, menu data, or customer information.',
  },
  {
    q: 'Can I manage multiple restaurant outlets with one account?',
    a: 'Yes. You can manage multiple outlets from a single centralized dashboard. View consolidated sales reports, manage menus, and track performance across all your locations in real-time.',
  },
  {
    q: 'What kind of customer support do you provide?',
    a: 'We provide live chat support, email support, and onboarding assistance for all plans. Our support team operates across multiple time zones to serve restaurants worldwide.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left">
            <div className="section-tag"><FaQuestionCircle size={11} /> FAQ</div>
            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about BhojanMitra. Can't find an answer? Our team is here to help.
            </p>
            <div className="faq-contact-card">
              <div className="fcc-icon">
                <FaWhatsapp size={30} color="#22C55E" />
              </div>
              <div>
                <strong>Still have questions?</strong>
                <p>Chat with us — we reply within 5 minutes!</p>
              </div>
              <a href="#contact" className="btn-primary">
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          <div className="faq-right">
            {faqs.map((faq, i) => (
              <div
                className={`faq-item ${openIndex === i ? 'open' : ''}`}
                key={i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <div className="faq-toggle">
                    {openIndex === i ? <FaChevronUp size={13} /> : <FaChevronDown size={13} />}
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
