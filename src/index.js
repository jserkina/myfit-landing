import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactUs from './pages/contact_us.js';
import './fonts/Futura-Heavy.ttf'
import './fonts/Futura-medium.ttf'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
