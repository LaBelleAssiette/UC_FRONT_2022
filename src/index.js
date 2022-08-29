import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import Header from "./components/Header/Header";
import Chefs from "./routes/chefs";
import Menus from "./routes/menus";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Chefs />} />
              <Route path="chefs" element={<Chefs />} />
              <Route path="menus" element={<Menus />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
