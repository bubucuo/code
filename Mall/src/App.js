import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './lib/flexible'
import './index.scss';
import './static/iconfont/iconfont.css'
import Router from './pages/router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
