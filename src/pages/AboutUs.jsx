import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';
import './AboutUs.css';

const AboutUs = () => {
  const team = [
    { name: 'Arjun Mehta', role: 'CEO & Co-Founder', emoji: '👨‍💼', quote: 'We built BhojanMitra because every restaurant deserves world-class technology.' },
    { name: 'Priya Sharma', role: 'CTO & Co-Founder', emoji: '👩‍💻', quote: 'Scalable, fast, and beautiful — that\'s the standard we build to every day.' },
    { name: 'Rahul Verma', role: 'Head of Product', emoji: '🎯', quote: 'Every feature we ship makes a restaurateur\'s day a little easier.' },
    { name: 'Ananya Patel', role: 'Head of Customer Success', emoji: '🌟', quote: 'Our customers\' success is our only metric that matters.' },
  ];

  const milestones = [
    { year: '2024', event: 'BhojanMitra founded in Ahmedabad, India' },
    { year: 'May 2024', event: 'First 10 restaurant clients onboarded' },
    { year: 'Sept 2024', event: 'Launched QR Ordering & KOT Printing modules' },
    { year: 'Dec 2024', event: 'Expanded to 5 countries across South Asia' },
    { year: 'Mar 2025', event: 'Reached 50+ active restaurants' },
    { year: 'Jun 2025', event: 'Launched multi-currency support & global pricing' },
    { year: 'Jul 2026', event: '100+ restaurants worldwide, 40+ countries' },
  ];

  const values = [
    { icon: '🚀', title: 'Move Fast', desc: 'We ship meaningful features every week, not every quarter.' },
    { icon: '💡', title: 'Innovate Boldly', desc: 'We challenge every convention in restaurant tech with fresh thinking.' },
    { icon: '🤝', title: 'Customer First', desc: 'Every decision we make starts with: "Does this make our customers\' lives better?"' },
    { icon: '🌍', title: 'Global by Default', desc: 'We build for every restaurant, in every country, in every currency.' },
    { icon: '🔒', title: 'Trust & Security', desc: 'Your data is your business. We protect it like it\'s our own.' },
    { icon: '📈', title: 'Data-Driven', desc: 'We let metrics guide our decisions, not assumptions.' },
  ];

  return (
    <>
      <Navbar />
      <div className="static-page">
        {/* Hero */}
        <div className="static-hero">
          <div className="container">
            <div className="static-hero-tag">🍽️ Our Story</div>
            <h1 className="static-hero-title">Built by <span>Restaurant Lovers</span><br />for Restaurant Owners</h1>
            <p className="static-hero-desc">
              BhojanMitra was born from a simple frustration: why does world-class restaurant software cost a fortune and take months to set up? We believed it shouldn't.
            </p>
          </div>
        </div>

        <div className="static-body">
          <div className="container">

            {/* Mission */}
            <div className="about-mission">
              <div className="about-mission-text">
                <span className="section-tag">🎯 Our Mission</span>
                <h2 className="section-title">Empowering <span>every</span> restaurant<br />to run smarter</h2>
                <p className="section-subtitle">
                  We're on a mission to give every restaurant — from a single chai stall to a 50-outlet chain — access to the same powerful technology that global chains use, at a price that makes sense.
                </p>
                <div className="about-stats">
                  {[
                    { value: '100+', label: 'Restaurants' },
                    { value: '40+', label: 'Countries' },
                    { value: '$2M+', label: 'GMV Monthly' },
                    { value: '4.8★', label: 'Avg Rating' },
                  ].map((s, i) => (
                    <div key={i} className="about-stat">
                      <span className="about-stat-val">{s.value}</span>
                      <span className="about-stat-lab">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-mission-visual">
                <div className="about-visual-card">
                  <div className="avc-emoji">🍽️</div>
                  <h3>World's Most Affordable<br />Complete POS</h3>
                  <p>Starting from just $9/month for full features — no hidden fees, no per-device charges.</p>
                  <div className="avc-badges">
                    <span>✅ 5-min setup</span>
                    <span>✅ No contract</span>
                    <span>✅ Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="about-timeline">
              <h2 className="section-title" style={{ textAlign:'center', marginBottom: 48 }}>Our <span>Journey</span></h2>
              <div className="timeline-track">
                {milestones.map((m, i) => (
                  <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-dot" />
                    <div className="timeline-card">
                      <span className="timeline-year">{m.year}</span>
                      <p>{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="about-values">
              <h2 className="section-title" style={{ textAlign:'center', marginBottom: 8 }}>Our <span>Values</span></h2>
              <p className="section-subtitle" style={{ textAlign:'center', margin: '0 auto 48px' }}>The principles that guide every line of code we write</p>
              <div className="values-grid">
                {values.map((v, i) => (
                  <div key={i} className="value-card">
                    <span className="value-icon">{v.icon}</span>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="about-team">
              <h2 className="section-title" style={{ textAlign:'center', marginBottom: 48 }}>Meet the <span>Team</span></h2>
              <div className="team-grid">
                {team.map((t, i) => (
                  <div key={i} className="team-card">
                    <div className="team-avatar">{t.emoji}</div>
                    <h3>{t.name}</h3>
                    <span>{t.role}</span>
                    <p>"{t.quote}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="about-cta">
              <h2>Ready to transform your restaurant?</h2>
              <p>Join 100+ restaurants already using BhojanMitra to serve faster, smarter, and profitably.</p>
              <div className="about-cta-btns">
                <a href="#contact" className="btn-primary"><span>🚀 Get Started Free</span></a>
                <a href="/experience" className="btn-secondary">Live Demo</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
