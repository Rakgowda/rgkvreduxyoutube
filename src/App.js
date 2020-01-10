import React from 'react';
import logo from './logo.svg';
import './App.css';

import Ex from './components/ex.js'
import { Provider } from 'react-redux'
import store from './redux/store';
import Mmenu from './components/mmenu'
import Menu from './components/menu'
function App() {
  return (
   <Provider store={store}>
     <Menu></Menu>
 <Ex>

</Ex>

   </Provider>

  );
}

export default App;
