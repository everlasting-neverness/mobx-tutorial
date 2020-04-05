import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoryPointsApp, { Store } from './components/StoryPointsApp';
import * as serviceWorker from './serviceWorker';

const storePointsAppStore = new Store();

ReactDOM.render(
  <React.StrictMode>
    <StoryPointsApp store={storePointsAppStore} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
