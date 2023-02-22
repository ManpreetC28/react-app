import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alerts from "./components/Alerts";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutus="About us" />
        <Alerts Alerts={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <TextForm title="Text" />
            </Route>
          </Switch>
        
        </div>
      </Router>
    </>
  );
}

export default App;
