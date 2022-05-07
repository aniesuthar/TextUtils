// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


import './App.css'
import Alert from "./Components/Alert";

function App() {

  const [mode, setMode] = useState("light");
  // const [modeTextC, setModeTextC] = useState("dark");
  const [modeText, setModeText] = useState("Enable Dark Mode");

  // let darkColor = "#101a54"
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setModeTextC('light');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = '#011338';
      showAlert('DarkMode hasbeen enabled', 'success');

    } else {
      setMode('light');
      // setModeTextC('dark');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert('LightMode hasbeen enabled', 'success');

    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />

        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}

          {/* <Route path="/"> */}
            <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
