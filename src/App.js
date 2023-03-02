import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import FormText from './components/FormText';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  

  const toggleMode=(cls) => {
    // console.log(cls)
    // removeBackgroungColor();
    // document.body.classList.add(`bg-${cls}`)  
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#333333'
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const showAlert=(message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    
    setTimeout(() => {
      setAlert(null)
    },1500)
    
  }
  
  document.title='TextUtils - Edit Your Text Here'
 



  return (
    <>
   
    <FormText showAlert ={showAlert} mode={mode}/> */
    
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
      <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/"> 
              <FormText showAlert ={showAlert} mode={mode}/>
            </Route>
            <Route exact path="/home"> 
              <FormText showAlert ={showAlert} mode={mode}/>
            </Route>
            <Route exact path="/Home"> 
              <FormText showAlert ={showAlert} mode={mode}/>
            </Route>
      </Switch>
    </Router>
    </>
  );
}


Navbar.propTypes = {
  title : PropTypes.string,
  disable : PropTypes.string,
}
Navbar.defaultProps = {
  title : "Text 2 UpperCase",
  disable: "disabled"
}
FormText.defaultProps={
  heading: "Enter yout Text"
}
export default App;