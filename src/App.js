
import './App.css';
import Navbar from './components/Navbar';
import MyAppTextform from './components/MyAppTextForm';
import About from './components/About';
import React, { useState } from 'react' //imrs
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="My App" aboutText="About My App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={
              <About mode={mode}/>
              } />
            <Route exact path="/" element={
              <MyAppTextform heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
