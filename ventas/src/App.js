import React from "react";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import Productos2 from "./pages/Productos2";
import Inicio from "./pages/Index";
import Ventas from "./pages/Ventas";
import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";
import './styles/styles.css';
import Registro from "./pages/Registro";
import Usuario from "./pages/Usuario";

function App(){
  return(
    <div className='App'>
      <Router>
        <Switch>
        <Router path='/Usuario'>
          <Usuario />
        </Router>
        <Router path='/Ventas'>
          <Ventas />
        </Router>
        <Router path='/Productos2'>
          <Productos2 />
        </Router>
        <Router path='/Productos'>
          <Productos />
        </Router>
        <Router path='/Registro'>
          <Registro />
        </Router>
        <Router path='/Login'>
          <Login />
        </Router>
        <Router path='/'>
          <Inicio />
        </Router>
      </Switch>
    </Router>
    </div>
  );
}
export default App;
