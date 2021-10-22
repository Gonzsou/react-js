import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { FavoritesContextProvider } from './store/Favorites-context'; //curly braces because we don't want the default export which is the context object, but the component function instead 

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </FavoritesContextProvider>,

  document.getElementById('root')
);