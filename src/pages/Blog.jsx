import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';
import './Blog.css';

const posts = [
  {
    id: 1, emoji: '📊',
    category: 'Tips & Tricks',
    date: 'July 10, 2026',
    readTime: '5 min read',
    title: '10 Ways to Speed Up Table Turnover at Your Restaurant',
    desc: 'Faster tables mean more revenue. Discover proven strategies used by top restaurants worldwide to serve more guests without sacrificing quality.',
    featured: true,
  },
  {
    id: 2, emoji: '📱',
    category: 'Product Update',
    date: 'July 5, 2026',
    readTime: '3 min read',
    title: 'BhojanMitra v2.5: QR Self-Ordering & Real-Time Analytics Dashboard',
    desc: 'Our biggest release yet — guest-facing QR menus, live kitchen display, and a brand new analytics module with daily profit reports.',
  },
  {
    id: 3, emoji: '💰',
    category: 'Business Growth',
    date: 'June 28, 2026',
    readTime: '7 min read',
    title: 'How Café Bloom Increased Monthly Revenue by 34% with BhojanMitra',
    desc: 'A real case study from a 3-outlet café chain in Dubai. Learn exactly what changed and how digital ordering transformed their bottom line.',
  },
  {
    id: 4, emoji: '🌍',
    category: 'Global Expansion',
    date: 'June 20, 2026',
    readTime: '4 min read',
    title: 'Multi-Currency POS: How to Serve International Guests with Confidence',
    desc: 'With multi-currency support now live in BhojanMitra, restaurants in 40+ countries can now invoice guests in their local currency.',
  },
  {
    id: 5, emoji: '🤖',
    category: 'Technology',
    date: 'June 14, 2026',
    readTime: '6 min read',
    title: 'How AI Menu Suggestions Helped One Restaurant Increase Average Order Value',
    desc: 'Smart upselling powered by purchase history and weather data — here\'s how one restaurant added $8 to every average order.',
  },
  {
    id: 6, emoji: '📋',
    category: 'Guide',
    date: 'June 5, 2026',
    readTime: '8 min read',
    title: 'The Complete Guide to GST Billing for Restaurants in 2026',
    desc: 'Everything you need to know about GST compliance, tax slabs for food items, and how BhojanMitra automates your GST returns.',
  },
];

const Blog = () => {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <>
      <Navbar />
      <div className="static-page">
        <div className="static-hero">
          <div className="container">
            <div className="static-hero-tag">📰 Insights</div>
            <h1 className="static-hero-title">The BhojanMitra <span>Blog</span></h1>
            <p className="static-hero-desc">
              Restaurant tips, product updates, growth strategies, and real stories from the kitchen floor.
            </p>
          </div>
        </div>

        <div className="static-body">
          <div className="container">

            {/* Featured Post */}
            {featured && (
              <div className="blog-featured">
                <div className="blog-featured-emoji">{featured.emoji}</div>
                <div className="blog-featured-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{featured.category}</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2>{featured.title}</h2>
                  <p>{featured.desc}</p>
                  <a href="#" className="btn-primary"><span>Read Article →</span></a>
                </div>
              </div>
            )}

            {/* Post grid */}
            <div className="blog-grid">
              {rest.map(post => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-emoji">{post.emoji}</div>
                  <div className="blog-meta">
                    <span className="blog-cat">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <a href="#" className="blog-read-more">Read More →</a>
                </article>
              ))}
            </div>

            {/* Newsletter */}
            <div className="blog-newsletter">
              <h3>📬 Get weekly restaurant insights</h3>
              <p>Join 2,000+ restaurant owners who read our newsletter every Monday.</p>
              <div className="blog-nl-form">
                <input type="email" placeholder="your@email.com" />
                <button className="btn-primary"><span>Subscribe</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
