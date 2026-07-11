import { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
      setProgress(Math.round(current));
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      {/* Animated background blobs */}
      <div className="pre-blob pre-blob-1" />
      <div className="pre-blob pre-blob-2" />
      <div className="pre-blob pre-blob-3" />

      <div className="pre-content">
        {/* Logo + brand */}
        <div className="pre-logo-wrap">
          <div className="pre-logo-ring" />
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="BhojanMitra" className="pre-logo-img" loading="eager" fetchPriority="high" />
          </picture>
        </div>

        <h1 className="pre-brand">BhojanMitra</h1>
        <p className="pre-tagline">Smart POS for Smart Restaurants</p>

        {/* Progress bar */}
        <div className="pre-bar-wrap">
          <div className="pre-bar-track">
            <div className="pre-bar-fill" style={{ width: `${progress}%` }} />
            <div className="pre-bar-shimmer" style={{ width: `${progress}%` }} />
          </div>
          <span className="pre-percent">{progress}%</span>
        </div>

        {/* Loading dots */}
        <div className="pre-dots">
          <span /><span /><span />
        </div>

        <p className="pre-status">
          {progress < 30 ? '🍜 Setting up your kitchen...' :
           progress < 60 ? '📊 Loading analytics...' :
           progress < 85 ? '✅ Preparing your dashboard...' :
           '🚀 Almost ready!'}
        </p>
      </div>

      {/* Food emoji particles */}
      <div className="pre-particles">
        {['🍕','🍜','🍔','☕','🌮','🍣'].map((emoji, i) => (
          <span key={i} className={`pre-particle pre-p${i + 1}`}>{emoji}</span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
