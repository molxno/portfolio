import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {inject} from '@vercel/analytics';
import {SpeedInsights} from "@vercel/speed-insights/react";

inject();

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App/>
            <SpeedInsights/>
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}
