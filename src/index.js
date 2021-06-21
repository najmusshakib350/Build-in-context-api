import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from "react-redux";
// import mystore from "./Redux/reduxstore";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
//    <React.StrictMode>
//     <Provider store={mystore}> 
//     </Provider> 
//  </React.StrictMode>, 
  <App />,
  document.getElementById('root')
);


reportWebVitals();
