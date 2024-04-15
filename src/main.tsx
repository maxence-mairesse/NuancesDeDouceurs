import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/next"
import App from './components/App/App';

import './styles/index.scss';

const root = createRoot(document.getElementById('root') as Element);

root.render(<App />);
