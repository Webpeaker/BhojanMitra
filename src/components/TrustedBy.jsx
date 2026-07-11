import {
  FaStore, FaCoffee, FaTruck, FaHamburger, FaBirthdayCake,
  FaGlassMartiniAlt, FaShuttleVan, FaConciergeBell,
  FaBuilding, FaDollarSign, FaChartBar, FaGlobe,
  FaStar, FaBolt
} from 'react-icons/fa';
import './TrustedBy.css';

const restaurantTypes = [
  { icon: <FaConciergeBell />, name: 'Fine Dining' },
  { icon: <FaCoffee />, name: 'Cafés' },
  { icon: <FaTruck />, name: 'Cloud Kitchens' },
  { icon: <FaHamburger />, name: 'Fast Food' },
  { icon: <FaBirthdayCake />, name: 'Bakeries' },
  { icon: <FaGlassMartiniAlt />, name: 'Bars & Lounges' },
  { icon: <FaShuttleVan />, name: 'Food Trucks' },
  { icon: <FaStore />, name: 'Casual Dining' },
  { icon: <FaBuilding />, name: 'Multi-Outlet' },
];

const statsData = [
  { value: '100+', label: 'Restaurants Worldwide', icon: <FaStore size={22} /> },
  { value: '$2M+', label: 'Processed Monthly', icon: <FaDollarSign size={22} /> },
  { value: '40+', label: 'Countries', icon: <FaGlobe size={22} /> },
  { value: '99.9%', label: 'Uptime SLA', icon: <FaBolt size={22} /> },
  { value: '4.8/5', label: 'Customer Satisfaction', icon: <FaStar size={22} /> },
  { value: '5 min', label: 'Avg Support Response', icon: <FaChartBar size={22} /> },
];

const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <div className="container">
        <div className="tb-header">
          <p>Trusted by restaurants of all types around the world</p>
        </div>

        <div className="restaurant-types-scroll">
          <div className="rt-track">
            {[...restaurantTypes, ...restaurantTypes].map((type, i) => (
              <div className="rt-chip" key={i}>
                <span className="rt-chip-icon">{type.icon}</span>
                <span>{type.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-bar">
          {statsData.map((stat, i) => (
            <div className="stat-bar-item" key={i}>
              <div className="sbi-icon">{stat.icon}</div>
              <span className="sbi-value">{stat.value}</span>
              <span className="sbi-label">{stat.label}</span>
              {i < statsData.length - 1 && <div className="sbi-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
