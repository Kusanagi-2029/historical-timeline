import Error404 from '../pages/ErrorPages/error404';
import Error503 from '../pages/ErrorPages/error503';
import ErrorNotResponding from '../pages/ErrorPages/error503';

import React from 'react';

import MainPage from 'pages/MainPage/mainPage';
import ThreeBlocksPage from 'pages/ThreeBlocksPage/threeBlocksPage';
import { Route, Routes } from 'react-router-dom';

/**
 * Компонент роутов приложения
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/error404" element={<Error404 />} />
      <Route path="/error503" element={<Error503 />} />

      <Route path="*" element={<Error404 />} />

      <Route path="/error_not_responding" element={<ErrorNotResponding />} />
      <Route path="/3" element={<ThreeBlocksPage />} />

      <Route path="/" element={<MainPage />}>
        <Route index element={<MainPage />} />
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
