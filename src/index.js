import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import  NoticesPage  from "./pages/NoticesPage";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NoticesPage/>
  </React.StrictMode>
);
