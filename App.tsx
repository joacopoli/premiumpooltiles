
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
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      
      const isAnchor = ['#collections', '#projects', '#contact'].includes(hash);
      if (isAnchor) {
        // Delay slightly to allow Home component to render if needed
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Handle initial scroll to hash on load
    const initialHash = window.location.hash;
    if (initialHash && ['#collections', '#projects', '#contact'].includes(initialHash)) {
      setTimeout(() => {
        const element = document.getElementById(initialHash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

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
