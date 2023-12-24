import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { AppProvider } from './context';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
