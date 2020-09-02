import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
);


serviceWorker.register();