import React from 'react';
import{createRoot} from 'react-dom/client';

const App = () => {
  console.log("@@@ app loading @@@@")
  return (<h1>Hello world</h1>);
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
);
