import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import FormComponent from "./components/FormCompnent";
import CounterComponent from "./components/CounterComponent";
import AlertComponent from "./components/AlertComponent";
import NewsContainerCom from "./components/NewsContainerCom";
import NewsContainerCom2 from "./components/NewsContainerCom2";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Swithed to dark mode", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Switched to light mode", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Website" mode={mode} toggleMode={toggleMode} />
        <AlertComponent alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path='/about' element={
            <FormComponent mode={mode} showAlert={showAlert} />
          } />

          <Route path='/counter' element={
            <CounterComponent mode={mode} />
          } />

          <Route path='/news' element={
            <NewsContainerCom />
          } />

          <Route path='/news2' element={
            <NewsContainerCom2 />
          } />

          <Route path='/' element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>

          } />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
