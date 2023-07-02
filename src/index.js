import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1441eef0922ca4fe3a71059534ecb57e54ce1a4d
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MentorProvider } from "./ContextAPI/Store"
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MentorProvider } from "./ContextAPI/Store"
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> f544ea2 (ss)
=======
>>>>>>> 1441eef0922ca4fe3a71059534ecb57e54ce1a4d

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

