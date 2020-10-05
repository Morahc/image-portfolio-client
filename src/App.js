import React, { useEffect } from "react";
import "materialize-css";
import M from "materialize-css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import FullGallery from './components/FullGallery/FullGallery';


function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/images' component={FullGallery}/>
          <Route path='/' exact component={Home}/>
          <Route path='/'>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
