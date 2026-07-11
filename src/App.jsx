import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './pages/Experience';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/privacy"    element={<PrivacyPolicy />} />
        <Route path="/terms"      element={<TermsOfService />} />
        <Route path="/refund"     element={<RefundPolicy />} />
        <Route path="/about"      element={<AboutUs />} />
        <Route path="/blog"       element={<Blog />} />
        <Route path="/help"       element={<HelpCenter />} />
        <Route path="/careers"    element={<HelpCenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
