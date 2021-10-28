import React from "react";
import Header from "./components/header";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";
import './styles/styles.css';

function App(){
  return(
    <div className='App'>
      <Router>
        <Switch>
        <Router path='/Productos'>
          <Productos />
        </Router>
        <Router path='/Login'>
          <Login />
        </Router>
        <Router path='/'>
          <Header />
        </Router>
      </Switch>
    </Router>
    </div>
  );
}
export default App;
