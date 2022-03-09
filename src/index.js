import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL= 'https://62283c769fd6174ca81e2dfb.mockapi.io/api'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
