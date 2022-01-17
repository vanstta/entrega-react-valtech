import React from "react";
import ProductoDetalle from "./components/ProductoDetalle";
import {Provider} from 'react-redux'
import generateStore from "./store";
import Navbar from "./components/Navbar";
import Collections from './pages/Collections'
import Men from './pages/Men'
import Aboout from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Women from "./pages/Women";



function App() {

  const store = generateStore()
 
  return ( 
  <Provider store={store}>
    <Router>
      <Navbar/>
      <hr className="hr-nav" />
    <Switch>
      <Route path="/women">
         <Women/>
      </Route>
      <Route path="/collections">
         <Collections/>
      </Route>
      <Route path="/men">
         <Men/>
      </Route>
      <Route path="/about">
         <Aboout/>
      </Route>
      <Route path="/contact">
         <Contact/>
      </Route>
      <Route path="/">
         <Home/>
      </Route>
    </Switch>
    
    </Router>
    </Provider>
  );
}

export default App;
