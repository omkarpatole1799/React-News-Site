import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import TextOperation from "./components/TextOperation";
import CounterComponent from "./components/CounterComponent";
import AlertComponent from "./components/AlertComponent";
import NewsContainerCom from "./components/NewsContainerCom";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import LoginFormCom from "./components/LoginFormCom";
import TableList from "./components/TableList";
import Test from "./components/Test";

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

          <Route path="/work" element={<Work />} >
            <Route path='news' element={<NewsContainerCom />} />
            <Route path='counter' element={<CounterComponent mode={mode} />} />
            <Route path="login-form" element={<LoginFormCom />} />
            <Route path="table" element={<TableList />} />
            <Route path="text-operation" element={<TextOperation showAlert={showAlert} mode={mode} />} />
          </Route>

          <Route path="/test" element={<Test />} />

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
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
