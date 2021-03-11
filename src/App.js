import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/Home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
       <Route path="/about/:id">
        <About></About>
       </Route>
      <Route path="*">
       <Notfound></Notfound>
      </Route>
      </Switch>
      </Router>
    </div>
   
  );
}

export default App;
