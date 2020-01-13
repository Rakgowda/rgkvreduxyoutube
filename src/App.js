import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route,Link,NavLink,BrowserRouter as Router} from 'react-router-dom'
import Ex from './components/ex.js'
import { Provider } from 'react-redux'
import store from './redux/store';
import Mmenu from './components/mmenu'
import Menu from './components/menu'
import News from './components/news'

function App() {
  return (
   <Provider store={store}>
  <Router>

 

  <Switch>
 <Route exact path="/" component={Ex}>

 </Route>
 <Route path="/news" component={News}></Route>
 </Switch>
  </Router>

   </Provider>

  );
}

export default App;
