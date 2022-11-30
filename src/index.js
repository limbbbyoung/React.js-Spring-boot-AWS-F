import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker'; // 지금(p.173 기준)은 무시해도 됨

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // ReactDOM이 내부의 컴포넌트들을 'root' 엘리먼트에 render함
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
