import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    // <BrowserRouter>
      <div className={`app ${mode}`}>
        <Navbar
          title="TextUtils"
          //aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}

            {/* <Route
              path="/"
              element={ */}
                <TextForm
                  title="Enter text to analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
               {/* }
            /> */}
          {/* </Routes> */}
        </div>
      </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
