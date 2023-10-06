// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import BlankPage from "./components/BlankPage";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/echtgeld-casino" element={<BlankPage />} />
          <Route path="/freispiele" element={<BlankPage />} />
          <Route path="/casino-bonus" element={<BlankPage />} />
          <Route path="/spielautomaten" element={<BlankPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
