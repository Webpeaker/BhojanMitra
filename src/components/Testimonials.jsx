import { FaStar, FaMapMarkerAlt, FaStore } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'James Carter',
    role: 'Owner, The Garden Bistro',
    city: 'London, UK',
    initials: 'JC',
    rating: 5,
    text: 'BhojanMitra transformed our restaurant operations completely. The QR ordering system has reduced staff workload by 40% and our customers love the contactless experience.',
    tag: 'Fine Dining',
    color: '#E8541A',
  },
  {
    name: 'Sofia Mendes',
    role: 'Owner, Café Verde',
    city: 'Lisbon, Portugal',
    initials: 'SM',
    rating: 5,
    text: 'We switched from a $400/month POS to BhojanMitra and the features are honestly better. The digital QR menu with photos increased our average order value by 25%.',
    tag: 'Café',
    color: '#2D7D46',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Manager, Spice Route Restaurant',
    city: 'Dubai, UAE',
    initials: 'AA',
    rating: 5,
    text: 'The real-time menu updates are incredible — we can mark items sold out instantly during busy hours. Customer feedback via QR has helped us improve our service significantly.',
    tag: 'QSR',
    color: '#8B5CF6',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Owner, Sakura Kitchen',
    city: 'Tokyo, Japan',
    initials: 'YT',
    rating: 5,
    text: 'The multi-language menu feature is perfect for our international customers. We serve tourists from all over the world and now everyone can order in their preferred language.',
    tag: 'Fine Dining',
    color: '#F59E0B',
  },
  {
    name: 'Marco Bianchi',
    role: 'Owner, Trattoria Milano',
    city: 'Milan, Italy',
    initials: 'MB',
    rating: 5,
    text: 'Managing 3 outlets from one dashboard is unbelievable. The analytics show me which dishes perform best at each location. Worth every penny of the $2/month!',
    tag: 'Multi-Outlet',
    color: '#0EA5E9',
  },
  {
    name: 'Priya Nair',
    role: 'Owner, Coastal Cloud Kitchen',
    city: 'Singapore',
    initials: 'PN',
    rating: 5,
    text: 'Setup took just 30 minutes. The QR code ordering system means my 2-person team can handle 3x more orders. BhojanMitra paid for itself in the first week!',
    tag: 'Cloud Kitchen',
    color: '#EC4899',
  },
];

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={14} color={i < rating ? '#F5A623' : '#d1d5db'} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-tag">
            <FaStar size={12} /> Customer Love
          </div>
          <h2 className="section-title">
            800+ Restaurants <span>Can't Be Wrong</span>
          </h2>
          <p className="section-subtitle">
            Real stories from restaurant owners across the globe who transformed their business with BhojanMitra.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-top">
                <div
                  className="testimonial-avatar"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}22, ${t.color}11)`,
                    borderColor: `${t.color}33`,
                  }}
                >
                  <span style={{ color: t.color, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16 }}>
                    {t.initials}
                  </span>
                </div>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <span className="author-city">
                    <FaMapMarkerAlt size={10} /> {t.city}
                  </span>
                </div>
                <span
                  className="restaurant-tag"
                  style={{ color: t.color, background: `${t.color}12`, borderColor: `${t.color}30` }}
                >
                  <FaStore size={10} /> {t.tag}
                </span>
              </div>
              <StarRating rating={t.rating} />
              <p className="testimonial-text">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="testimonials-summary">
          {[
            { value: '4.8/5', label: 'Average Rating' },
            { value: '800+', label: 'Happy Restaurants' },
            { value: '40+', label: 'Countries' },
            { value: '98%', label: 'Renewal Rate' },
          ].map((s, i, arr) => (
            <div key={s.label} style={{ display: 'contents' }}>
              <div className="summary-stat">
                <span className="summary-value">{s.value}</span>
                <span className="summary-label">{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className="summary-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
