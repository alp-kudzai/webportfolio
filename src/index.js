import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import './index.css';
import {App} from './app2';
import reportWebVitals from './reportWebVitals';

const render = () => {
  ReactDOM.render(
      <App />, document.getElementById('root')
  )
}

// store.subscribe(render)
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
