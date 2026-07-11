import { useState } from 'react';
import {
  FaChartLine, FaUtensils, FaChair, FaShoppingBag,
  FaRupeeSign, FaSync, FaSearch, FaBell, FaUser,
  FaBars, FaStar, FaPlus, FaArrowLeft, FaSignOutAlt,
  FaHistory, FaCog, FaQrcode, FaTimes, FaCheck, FaLock
} from 'react-icons/fa';
import './Experience.css';

// ── Demo Data ──────────────────────────────────────
const revenueData = [
  { t: '12AM', v: 0 }, { t: '4AM', v: 0 }, { t: '6AM', v: 1200 },
  { t: '8AM', v: 3400 }, { t: '10AM', v: 5200 }, { t: '12PM', v: 9800 },
  { t: '2PM', v: 7600 }, { t: '4PM', v: 6100 }, { t: '6PM', v: 11400 },
  { t: '8PM', v: 14800 }, { t: '10PM', v: 12300 }, { t: '12AM', v: 4100 },
];

const categories = [
  { name: 'All Items', count: 175 },
  { name: 'Favourite', count: 6 },
  { name: 'Omelette', count: 5 },
  { name: 'Milk Shakes', count: 16 },
  { name: 'Sandwiches', count: 8 },
  { name: 'Quick Bites', count: 18 },
  { name: 'Bread Bites', count: 9 },
  { name: 'Mixed Fruit Juice', count: 7 },
  { name: 'Smoothies', count: 17 },
];

const menuItems = [
  { name: 'Chicken Lollipops', price: 150, cat: 'Favourite', veg: false, fav: true },
  { name: 'Exotic Fruit Bowl', price: 140, cat: 'Favourite', veg: true, fav: true },
  { name: 'Black Currant', price: 50, cat: 'Favourite', veg: true, fav: true },
  { name: 'Mango Banana Orange', price: 100, cat: 'Favourite', veg: true, fav: true, outOfStock: true },
  { name: 'Lemon Tea', price: 20, cat: 'Favourite', veg: true, fav: true },
  { name: 'Watermelon', price: 60, cat: 'Favourite', veg: true, fav: true },
  { name: 'Veg Sandwich', price: 80, cat: 'Sandwiches', veg: true, fav: false },
  { name: 'Chicken Sandwich', price: 120, cat: 'Sandwiches', veg: false, fav: false },
];

const tables = [
  { id: 'T-1', people: 2, status: 'vacant' },
  { id: 'T-2', people: 3, status: 'occupied' },
  { id: 'T-3', people: 2, status: 'vacant' },
  { id: 'VV', people: 2, status: 'reserved' },
  { id: 'T-6', people: 4, status: 'occupied' },
  { id: 'T-7', people: 4, status: 'vacant' },
];

const navItems = [
  { id: 'analytics', icon: <FaChartLine size={18} />, label: 'Analytics' },
  { id: 'menu', icon: <FaUtensils size={18} />, label: 'Menu' },
  { id: 'tables', icon: <FaChair size={18} />, label: 'Tables' },
  { id: 'takeaway', icon: <FaShoppingBag size={18} />, label: 'Takeaway' },
  { id: 'billing', icon: <FaRupeeSign size={18} />, label: 'Billing' },
  { id: 'history', icon: <FaHistory size={18} />, label: 'History' },
  { id: 'settings', icon: <FaCog size={18} />, label: 'Settings' },
  { id: 'qr', icon: <FaQrcode size={18} />, label: 'QR Menu' },
  { id: 'reports', icon: <FaChartLine size={18} />, label: 'Reports', locked: true },
  { id: 'customers', icon: <FaUser size={18} />, label: 'Customers', locked: true },
  { id: 'inventory', icon: <FaUtensils size={18} />, label: 'Inventory', locked: true },
  { id: 'staff', icon: <FaBell size={18} />, label: 'Staff', locked: true },
];

// ── Analytics Screen ───────────────────────────────
const AnalyticsScreen = () => {
  const stats = [
    { label: 'Total Revenue', icon: <FaChartLine />, color: '#22C55E', value: '₹14,800', orders: '48 orders' },
    { label: 'Dine In', icon: <FaChair />, color: '#3B82F6', value: '₹9,200', orders: '31 orders' },
    { label: 'Take Away', icon: <FaShoppingBag />, color: '#F59E0B', value: '₹5,600', orders: '17 orders' },
    { label: 'Active', icon: <FaUtensils />, color: '#EF4444', value: '₹1,200', orders: '3 Dine In · 1 Take Away' },
  ];
  const maxV = Math.max(...revenueData.map(d => d.v));
  return (
    <div className="screen analytics-screen">
      <div className="screen-topbar">
        <div className="tab-group">
          <button className="tab active">Today's Analytics</button>
          <button className="tab">Custom</button>
        </div>
        <span className="last-updated"><FaSync size={11} /> Just now</span>
      </div>
      <div className="stats-row">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-card-top">
              <span className="stat-label">{s.label}</span>
              <span className="stat-icon-sm" style={{ color: s.color }}>{s.icon}</span>
            </div>
            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="stat-orders">{s.orders}</div>
          </div>
        ))}
      </div>
      <div className="charts-row">
        <div className="chart-card big">
          <div className="chart-title"><FaChartLine size={12} /> Revenue Analytics</div>
          <div className="chart-area">
            <svg viewBox="0 0 400 110" preserveAspectRatio="none" className="line-chart-svg">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points={revenueData.map((d, i) => `${i*(400/(revenueData.length-1))},${110-(d.v/maxV)*100}`).join(' ')}
                fill="none" stroke="#22C55E" strokeWidth="2.5"
              />
              <polygon
                points={[...revenueData.map((d,i)=>`${i*(400/(revenueData.length-1))},${110-(d.v/maxV)*100}`),'400,110','0,110'].join(' ')}
                fill="url(#grad)"
              />
            </svg>
            <div className="chart-x-labels">
              {revenueData.filter((_,i)=>i%3===0).map((d,i)=><span key={i}>{d.t}</span>)}
            </div>
          </div>
        </div>
        <div className="chart-card small">
          <div className="chart-title">Payment Breakdown</div>
          <div className="payment-breakdown">
            {[
              { method: 'UPI', pct: 58, color: '#6366F1', amount: '₹8,584' },
              { method: 'Cash', pct: 28, color: '#22C55E', amount: '₹4,144' },
              { method: 'Card', pct: 14, color: '#F59E0B', amount: '₹2,072' },
            ].map((p,i) => (
              <div className="payment-row" key={i}>
                <div className="payment-label">
                  <span className="payment-dot" style={{background:p.color}}></span>
                  <span>{p.method}</span>
                </div>
                <div className="payment-bar-wrap">
                  <div className="payment-bar" style={{width:`${p.pct}%`,background:p.color}}></div>
                </div>
                <span className="payment-amount">{p.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Menu Screen ────────────────────────────────────
const MenuScreen = () => {
  const [activeCat, setActiveCat] = useState('Favourite');
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);
  const [tableNo, setTableNo] = useState('');
  const [tableError, setTableError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(null); // { table, total }

  const filtered = menuItems.filter(item =>
    (activeCat === 'All Items' || item.cat === activeCat) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const addToCart = (name) => setCart(c => ({ ...c, [name]: (c[name]||0)+1 }));
  const total = Object.entries(cart).reduce((sum,[name,qty]) => {
    const item = menuItems.find(m=>m.name===name);
    return sum+(item?item.price*qty:0);
  },0);
  const cartCount = Object.values(cart).reduce((a,b)=>a+b,0);

  const handleConfirmOrder = () => {
    if (!tableNo.trim()) { setTableError('Please enter a table number'); return; }
    setOrderSuccess({ table: tableNo.trim(), total });
    setShowTableModal(false);
    setCart({});
    setTableNo('');
    setTableError('');
    setShowCart(false);
    setTimeout(() => setOrderSuccess(null), 4000);
  };

  return (
    <div className="screen menu-screen" style={{position:'relative'}}>
      {/* ── Order Success Toast ── */}
      {orderSuccess && (
        <div className="order-success-toast">
          <FaCheck size={16} color="#22C55E"/>
          <div>
            <strong>Order placed for Table {orderSuccess.table}!</strong>
            <span>KOT sent to kitchen · ₹{orderSuccess.total} total</span>
          </div>
        </div>
      )}

      <div className="menu-layout">
        {/* Category sidebar */}
        <div className="menu-sidebar">
          {categories.map(cat => (
            <div key={cat.name} className={`menu-cat ${activeCat===cat.name?'active':''}`} onClick={()=>setActiveCat(cat.name)}>
              <span className="cat-name">{cat.name}</span>
              <span className="cat-count">{cat.count}</span>
            </div>
          ))}
        </div>

        <div className="menu-main">
          <div className="menu-search-bar">
            <FaSearch size={13} color="#666" />
            <input placeholder="Search menu items..." value={search} onChange={e=>setSearch(e.target.value)} />
            {cartCount > 0 && (
              <button className="cart-fab" onClick={()=>setShowCart(s=>!s)}>
                🛒 {cartCount} · ₹{total}
              </button>
            )}
          </div>
          <div className="menu-cat-label">{activeCat}</div>
          <div className="menu-grid">
            {filtered.map((item,i) => (
              <div className={`menu-item-card ${item.outOfStock?'oos':''}`} key={i}>
                <div className="mic-top">
                  <span className={`veg-dot ${item.veg?'veg':'non-veg'}`}></span>
                  {item.fav && <FaStar size={11} color="#F5A623" />}
                </div>
                <div className="mic-name">{item.name}</div>
                <div className="mic-bottom">
                  <span className="mic-price">₹{item.price}</span>
                  {item.outOfStock
                    ? <span className="oos-badge">Out of Stock</span>
                    : <button className="add-btn" onClick={()=>addToCart(item.name)}>
                        {cart[item.name]?`+${cart[item.name]}`:'Add'}
                      </button>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart panel */}
        {Object.keys(cart).length > 0 && (
          <div className={`cart-panel ${showCart?'cart-open':''}`}>
            <div className="cart-title">
              Current Order
              <button className="cart-close-btn" onClick={()=>setShowCart(false)}><FaTimes size={12}/></button>
            </div>
            {Object.entries(cart).map(([name,qty])=>{
              const item=menuItems.find(m=>m.name===name);
              return (
                <div className="cart-item" key={name}>
                  <span className="cart-item-name">{name}</span>
                  <span className="cart-item-detail">×{qty} · ₹{item.price*qty}</span>
                </div>
              );
            })}
            <div className="cart-total">Total: ₹{total}</div>
            <button className="btn-place-order" onClick={()=>setShowTableModal(true)}>
              Place Order →
            </button>
          </div>
        )}
      </div>

      {/* ── Table Number Modal ── */}
      {showTableModal && (
        <div className="modal-overlay" onClick={()=>{setShowTableModal(false);setTableError('');}}>
          <div className="modal-box table-modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-title">🪑 Which table?</div>
            <p className="modal-subtitle">Enter the table number for this order</p>

            <div className="table-number-grid">
              {tables.map(t=>(
                <button
                  key={t.id}
                  className={`table-chip ${tableNo===t.id?'selected':''}`}
                  onClick={()=>{ setTableNo(t.id); setTableError(''); }}
                >
                  {t.id}
                </button>
              ))}
            </div>

            <div className="modal-or">— or type manually —</div>

            <input
              className="table-input"
              placeholder="e.g. T-5, VIP-1..."
              value={tableNo}
              onChange={e=>{ setTableNo(e.target.value); setTableError(''); }}
              onKeyDown={e=>e.key==='Enter'&&handleConfirmOrder()}
              autoFocus
            />
            {tableError && <p className="table-error">{tableError}</p>}

            <div className="order-summary-mini">
              <span>{cartCount} items</span>
              <strong>₹{total}</strong>
            </div>

            <div className="modal-actions">
              <button className="btn-confirm-order" onClick={handleConfirmOrder}>
                <FaCheck size={12}/> Confirm &amp; Send to Kitchen
              </button>
              <button className="ta-btn cancel" onClick={()=>{setShowTableModal(false);setTableError('');}}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Tables Screen ──────────────────────────────────
const TablesScreen = () => {
  const [filter, setFilter] = useState('All');
  const [tableStates, setTableStates] = useState(
    Object.fromEntries(tables.map(t=>[t.id,t.status]))
  );
  const toggle = (id) => setTableStates(prev=>({...prev,[id]:prev[id]==='vacant'?'occupied':'vacant'}));
  const filtered = tables.filter(t=>filter==='All'||tableStates[t.id]===filter.toLowerCase());

  return (
    <div className="screen tables-screen">
      <div className="screen-topbar wrap-on-mobile">
        <span className="screen-title-sm">Dine In Details</span>
        <div className="filter-group">
          {['All','Vacant','Reserved'].map(f=>(
            <button key={f} className={`filter-btn ${filter===f?'active':''}`} onClick={()=>setFilter(f)}>{f}</button>
          ))}
        </div>
      </div>
      <div className="tables-grid">
        {filtered.map(t=>(
          <div key={t.id} className={`table-card status-${tableStates[t.id]}`} onClick={()=>toggle(t.id)}>
            <div className="table-top-row">
              <span className="table-id">{t.id}</span>
              <span className="people-badge">{t.people} People</span>
            </div>
            <div className="table-status-label">{tableStates[t.id]}</div>
            <div className={`table-toggle ${tableStates[t.id]==='occupied'?'on':''}`}>
              <div className="table-toggle-thumb"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Takeaway Screen ────────────────────────────────
const TakeawayScreen = () => {
  const [orders, setOrders] = useState([
    { id:'TA-001', date:'11 Jul 3:15PM', items:'Chicken Lollipops ×2, Lemon Tea ×1', type:'Takeaway', amount:320 },
    { id:'TA-002', date:'11 Jul 3:42PM', items:'Exotic Fruit Bowl ×1, Watermelon ×2', type:'Takeaway', amount:260 },
  ]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="screen takeaway-screen">
      <div className="screen-topbar wrap-on-mobile">
        <span className="screen-title-sm">Take Away Orders</span>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <div className="search-input-wrap">
            <FaSearch size={12} color="#888" />
            <input placeholder="Search..." />
          </div>
          <button className="btn-create-ta" onClick={()=>setShowModal(true)}>
            <FaPlus size={11}/> New Order
          </button>
        </div>
      </div>
      {/* Mobile cards / Desktop table */}
      <div className="ta-cards-mobile">
        {orders.map((o,i)=>(
          <div className="ta-card" key={i}>
            <div className="ta-card-row">
              <span className="ta-id">{o.id}</span>
              <span className="ta-amount">₹{o.amount}</span>
            </div>
            <div className="ta-card-items">{o.items}</div>
            <div className="ta-card-footer">
              <span className="ta-date">{o.date}</span>
              <div className="ta-actions">
                <button className="ta-btn bill">Bill</button>
                <button className="ta-btn cancel" onClick={()=>setOrders(p=>p.filter((_,j)=>j!==i))}><FaTimes size={10}/></button>
              </div>
            </div>
          </div>
        ))}
        {orders.length===0 && (
          <div className="ta-empty"><FaShoppingBag size={28} color="#444"/><p>No orders yet</p></div>
        )}
      </div>
      <div className="ta-table-desktop">
        <div className="ta-table-head">
          <span>ID</span><span>Date</span><span>Items</span><span>Type</span><span>Amount</span><span>Action</span>
        </div>
        {orders.map((o,i)=>(
          <div className="ta-table-row" key={i}>
            <span className="ta-id">{o.id}</span>
            <span className="ta-date">{o.date}</span>
            <span className="ta-items">{o.items}</span>
            <span className="ta-type">{o.type}</span>
            <span className="ta-amount">₹{o.amount}</span>
            <span className="ta-actions">
              <button className="ta-btn bill">Bill</button>
              <button className="ta-btn cancel" onClick={()=>setOrders(p=>p.filter((_,j)=>j!==i))}><FaTimes size={10}/></button>
            </span>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={()=>setShowModal(false)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <div className="modal-title">New Take Away Order</div>
            <div className="modal-form">
              <input placeholder="Customer Name"/>
              <input placeholder="Phone Number"/>
              <input placeholder="Items (e.g. Chicken Lollipops ×2)"/>
            </div>
            <div className="modal-actions">
              <button className="btn-create-ta" onClick={()=>setShowModal(false)}><FaCheck size={11}/> Create</button>
              <button className="ta-btn cancel" onClick={()=>setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Main Experience Page ───────────────────────────
const Experience = () => {
  const [activeNav, setActiveNav] = useState('analytics');
  const [sideOpen, setSideOpen] = useState(false);

  const renderScreen = () => {
    switch(activeNav) {
      case 'analytics': return <AnalyticsScreen/>;
      case 'menu':      return <MenuScreen/>;
      case 'tables':    return <TablesScreen/>;
      case 'takeaway':  return <TakeawayScreen/>;
      default: return (
        <div className="screen coming-soon">
          <FaCog size={40} color="#444"/>
          <p>{navItems.find(n=>n.id===activeNav)?.label} — demo coming soon</p>
        </div>
      );
    }
  };

  const handleNav = (id) => { setActiveNav(id); setSideOpen(false); };

  return (
    <div className="experience-wrapper">
      {/* Top chrome bar */}
      <div className="exp-chrome-bar">
        <a href="/" className="exp-back-btn"><FaArrowLeft size={12}/> Back</a>
        <span className="exp-chrome-title">BhojanMitra Demo</span>
        <a href="/" className="exp-exit-btn"><FaSignOutAlt size={12}/> Exit</a>
      </div>

      {/* Device frame */}
      <div className="exp-device-frame">
        <div className="pos-app">
          {/* POS Topbar */}
          <div className="pos-topbar">
            <button className="pos-menu-icon" onClick={()=>setSideOpen(s=>!s)}><FaBars size={15}/></button>
            <div className="pos-brand">
              <img src="/logo.png" alt="BhojanMitra" className="pos-brand-logo"/>
              <span className="pos-brand-name">BhojanMitra</span>
            </div>
            <div className="pos-mode-tabs">
              {[
                {label:'Dine In', icon:<FaChair size={12}/>, nav:'tables'},
                {label:'Take Away', icon:<FaShoppingBag size={12}/>, nav:'takeaway'},
                {label:'Billing', icon:<FaRupeeSign size={12}/>, nav:'billing'},
              ].map(m=>(
                <button key={m.nav} className={`pos-mode-tab ${activeNav===m.nav?'active':''}`} onClick={()=>handleNav(m.nav)}>
                  {m.icon}<span className="mode-tab-label">{m.label}</span>
                </button>
              ))}
            </div>
            <div className="pos-topbar-right">
              <FaBell size={14}/>
              <FaUser size={14}/>
            </div>
          </div>

          {/* POS Body */}
          <div className="pos-body">
            {/* Desktop Sidebar */}
            <nav className={`pos-sidenav ${sideOpen?'side-open':''}`}>
              {/* Mobile close */}
              <button className="sidenav-close" onClick={()=>setSideOpen(false)}><FaTimes size={13}/></button>
              {navItems.map(item=>(
                item.locked
                  ? (
                    <div key={item.id} className="pos-nav-item locked" title={`${item.label} — Upgrade to unlock`}>
                      <span className="nav-icon-wrap">{item.icon}<FaLock size={9} className="lock-badge"/></span>
                      <span className="nav-item-label">{item.label}<span className="lock-label"> 🔒</span></span>
                    </div>
                  ) : (
                    <button key={item.id} className={`pos-nav-item ${activeNav===item.id?'active':''}`}
                      onClick={()=>handleNav(item.id)} title={item.label}>
                      {item.icon}
                      <span className="nav-item-label">{item.label}</span>
                    </button>
                  )
              ))}
            </nav>
            {/* Overlay for mobile sidenav */}
            {sideOpen && <div className="sidenav-overlay" onClick={()=>setSideOpen(false)}/>}

            {/* Content */}
            <div className="pos-content">{renderScreen()}</div>
          </div>

          {/* Mobile Bottom Nav */}
          <div className="pos-bottom-nav">
            {navItems.filter(n=>!n.locked).slice(0,5).map(item=>(
              <button key={item.id} className={`bottom-nav-item ${activeNav===item.id?'active':''}`}
                onClick={()=>setActiveNav(item.id)}>
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Powered by */}
      <div className="exp-powered">
        <span>Powered by</span>
        <img src="/webpeaker.png" alt="Webpeaker" className="exp-webpeaker-logo"/>
      </div>
    </div>
  );
};

export default Experience;
