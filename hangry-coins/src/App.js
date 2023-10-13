// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import BlankPage from "./components/BlankPage";
import PlayNGo from "./components/PlayNGo";
import Netent from "./components/Netent";
import Pragmatic from "./components/Pragmatic";
import YggDrasil from "./components/YggDrasil";
import EchtgeldCasino from "./components/EchtgeldCasino";
import Freispiele from "./components/Freispiele";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playngo" element={<PlayNGo />} />
          <Route path="/netent" element={<Netent />} />
          <Route path="/pragmatic" element={<Pragmatic />} />
          <Route path="/yggdrasil" element={<YggDrasil />} />
          <Route path="/echtgeld-casino" element={<EchtgeldCasino />} />
          <Route path="/Freispiele" element={<Freispiele />} />
          <Route path="/casino-bonus" element={<BlankPage />} />
          <Route path="/spielautomaten" element={<BlankPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
