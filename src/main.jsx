import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFWpWciS-FoPY9kNBjb1C8wlrty7Gy6oo",
  authDomain: "coderhouse-ecommerce-68d6a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-68d6a",
  storageBucket: "coderhouse-ecommerce-68d6a.appspot.com",
  messagingSenderId: "638976562191",
  appId: "1:638976562191:web:22d8b94082b0556d54bf7a"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
