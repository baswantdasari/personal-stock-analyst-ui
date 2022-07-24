import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router basename='ui'>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Router></Provider>,
);
