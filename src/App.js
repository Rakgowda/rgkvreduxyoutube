import React from 'react';
import logo from './logo.svg';
import './App.css';

import Ex from './components/ex.js'
import { Provider } from 'react-redux'
import store from './redux/store';
import Mmenu from './components/mmenu'
function App() {
  return (
   <Provider store={store}>
 <Ex>

</Ex>

   </Provider>

  );
}

export default App;
