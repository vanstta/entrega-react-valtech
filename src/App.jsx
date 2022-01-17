import React from "react";
import ProductoDetalle from "./components/ProductoDetalle";
import {Provider} from 'react-redux'
import generateStore from "./store";
import Navbar from "./components/Navbar";
import Collections from './components/paginas-sin-contenido/Collections'
import Men from './components/paginas-sin-contenido/Men'
import Aboout from './components/paginas-sin-contenido/About'
import Contact from './components/paginas-sin-contenido/Contact'
import Home from './components/paginas-sin-contenido/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {

  const store = generateStore()
 
  return ( 
  <Provider store={store}>
    <Router>
      <Navbar/>
      <hr className="hr-nav" />
    <Switch>
      <Route path="/women">
         <ProductoDetalle/>
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
