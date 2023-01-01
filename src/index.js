import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
  </React.StrictMode>
);


// https://www.notion.so/aman-vats-masai-school/Data-Structures-Algorithms-Recap-Part-1-512602a586be45fbbeb6bae920effdb9
// https://cp.masaischool.com/assignments/524/pi/1/solve#description