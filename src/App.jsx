import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Repair from './pages/Repair';
import Shop from './pages/Shop';
import Locate from './pages/Locate';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useScrollReveal(); // Now safe to use here if hook handles dependencies

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="repair" element={<Repair />} />
            <Route path="shop" element={<Shop />} />
            <Route path="locate" element={<Locate />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
