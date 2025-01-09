import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app';
import './index.css';
import 'remixicon/fonts/remixicon.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MSW) {
    const { serviceWorker } = await import('./mocks/worker');
    serviceWorker.start();
  }
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
