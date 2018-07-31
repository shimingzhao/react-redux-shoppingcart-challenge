import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configStore'
import "bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css';

// import './index.css';
import App from './App';

const app = <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
