import { useState } from 'react';
import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');

  const[alert,setAlert] = useState(null);

  const showalert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled!","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled!","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/about"
            element = {<About mode={mode} />}>
          </Route>
          <Route exact path="/" element = 
          {<Textform showalert={showalert} heading="Enter the text to analyze" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
