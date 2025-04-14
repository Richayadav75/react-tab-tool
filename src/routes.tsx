import React, { JSX, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy-loaded components for better performance
const Home = lazy(() => import(/* webpackChunkName: "App" */ './pages/Home'));

const AppRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);  

export default AppRoutes;
