import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import PostStream from './components/PostStream/PostStream.jsx'
import App from './components/App/App.jsx'
import './index.css';


ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
