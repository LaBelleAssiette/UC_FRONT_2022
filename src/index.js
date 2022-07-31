import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from "./components/Header/Header";
import Menus from "./routes/menus";
import Chefs from "./routes/chefs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Menus />} />
              <Route path="menus" element={<Menus />} />
              <Route path="chefs" element={<Chefs />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
