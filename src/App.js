import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router basename='ui'>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Router>,
);
