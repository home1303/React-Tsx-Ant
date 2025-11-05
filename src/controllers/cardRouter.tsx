import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardPage from "../views/CardPage"


const HomeRouter: React.FC = () => (

  <Routes>
    <Route path="/card" element={<CardPage />} />
  </Routes>
);

export default HomeRouter;
