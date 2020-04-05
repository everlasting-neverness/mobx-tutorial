import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import StoryPointsApp, { Store } from './components/StoryPointsApp';
import AsyncComponent, { Store } from './components/AsyncComponent';
import * as serviceWorker from './serviceWorker';

// const storePointsAppStore = new Store();

// const asyncStore = new Store();

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <StoryPointsApp store={storePointsAppStore} /> */}
    {/* <AsyncComponent store={asyncStore} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
