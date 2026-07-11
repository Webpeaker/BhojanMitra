import { FaWhatsapp, FaEnvelope, FaShieldAlt, FaPhoneAlt, FaTimesCircle, FaGift, FaArrowRight, FaBolt } from 'react-icons/fa';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', restaurant: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left">
            <div className="section-tag"><FaPhoneAlt size={11}/> Get In Touch</div>
            <h2 className="section-title">
              Start Your <span>Free Trial Today</span>
            </h2>
            <p className="section-subtitle">
              Fill out the form and our team will set up your BhojanMitra account within 30 minutes — for free!
            </p>

            <div className="contact-image-wrap">
              <picture>
                <source srcSet="/owner.webp" type="image/webp" />
                <img src="/owner.png" alt="Happy restaurant owner using BhojanMitra" className="contact-owner-img" loading="lazy" />
              </picture>
            </div>

            <div className="contact-benefits">
              {[
                { icon: <FaGift />, text: '1 Month Free — no credit card' },
                { icon: <FaBolt />, text: 'Setup in 30 minutes flat' },
                { icon: <FaPhoneAlt />, text: 'Works on your existing phone' },
                { icon: <FaWhatsapp />, text: 'Dedicated onboarding via WhatsApp' },
                { icon: <FaTimesCircle />, text: 'Cancel anytime, no lock-in' },
              ].map((b, i) => (
                <div className="contact-benefit" key={i}>
                  <span className="cb-icon">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            <div className="contact-channels">
              <a href="https://wa.me/918000778246" className="channel-btn whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
                <div>
                  <strong>WhatsApp Us</strong>
                  <span>+91 8000-77-8246</span>
                </div>
              </a>
              <a href="mailto:bhojanMitra@webpeaker.com" className="channel-btn email">
                <FaEnvelope size={22} />
                <div>
                  <strong>Email Us</strong>
                  <span>bhojanMitra@webpeaker.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-right">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <FaShieldAlt size={54} color="#2D7D46" />
                </div>
                <h3>You're all set!</h3>
                <p>Our team will contact you on WhatsApp within 30 minutes to set up your free trial.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Get Started Free</h3>
                  <p>Fill in your details below</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input id="name" type="text" name="name" placeholder="Rajesh Kumar" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="restaurant">Restaurant Name *</label>
                  <input id="restaurant" type="text" name="restaurant" placeholder="Spice Garden Restaurant" value={form.restaurant} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Restaurant Type</label>
                  <select id="type" name="type" value={form.type} onChange={handleChange}>
                    <option value="">Select type...</option>
                    <option value="fine-dining">Fine Dining</option>
                    <option value="qsr">QSR / Fast Food</option>
                    <option value="cafe">Café / Bakery</option>
                    <option value="cloud-kitchen">Cloud Kitchen</option>
                    <option value="dhaba">Dhaba</option>
                    <option value="bar">Bar / Lounge</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us more (optional)</label>
                  <textarea id="message" name="message" rows="3" placeholder="How many outlets? Any specific features you need?" value={form.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit">
                  <FaArrowRight size={14} />
                  <span>Start My Free Trial</span>
                </button>

                <p className="form-disclaimer">
                  By submitting, you agree to receive onboarding messages via WhatsApp. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
