
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RequestSample from './pages/RequestSample';
import TechnicalData from './pages/TechnicalData';
import FAQ from './pages/FAQ';
import ShippingReturns from './pages/ShippingReturns';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/request-sample': return <RequestSample />;
      case '#/technical-data': return <TechnicalData />;
      case '#/faq': return <FAQ />;
      case '#/shipping-returns': return <ShippingReturns />;
      case '#/privacy-policy': return <PrivacyPolicy />;
      case '#/terms-of-service': return <TermsOfService />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={scrolled} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
