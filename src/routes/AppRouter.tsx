// src/routes/AppRouter.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Catalog from '../pages/Catalog';
import About from '../pages/About';
import PerfumeDetailsPage from '../pages/PerfumeDetailsPage';
import NotFound from '../pages/NotFound';

const AppRouter: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/catalog" />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfume/:id" element={<PerfumeDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

export default AppRouter;
