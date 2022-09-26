import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store';
import { Provider as AlertProvider, positions, transitions } from "react-alert";



const options = {
  position:positions.BOTTOM_CENTER,
  setTimeout:5000,
  transitions:transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider {...options}>
        <App />
      </AlertProvider>

    </Provider>
  </React.StrictMode>
);
