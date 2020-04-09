import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import jokeFacade from './jokeFacade';
import scrapeFacade from './scrapeFacade';
import loginFacade from './loginFacade';

ReactDOM.render(
  <React.StrictMode>
    <App  jokeFacade={jokeFacade}
          scrapeFacade={scrapeFacade}
          loginFacade={loginFacade}
    />
  </React.StrictMode>,
  document.getElementById('root')
);