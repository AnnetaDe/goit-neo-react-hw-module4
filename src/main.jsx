import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import 'modern-normalize';
import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={1500} />
  </React.StrictMode>
);
