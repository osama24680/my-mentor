import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MentorProvider } from "./ContextAPI/Store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MentorProvider>
        <App />
      </MentorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

