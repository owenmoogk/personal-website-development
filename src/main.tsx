import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { mantineCssVariableResolver } from './cssVariableResolver';
import './main.css';
import { mantineTheme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <MantineProvider
        theme={mantineTheme}
        cssVariablesResolver={mantineCssVariableResolver}
      >
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </MantineProvider>
    </Router>
  </StrictMode>
);
