import ReactDOM from 'react-dom';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.querySelector('#root')
);
