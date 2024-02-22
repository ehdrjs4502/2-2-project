import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import MapPage from "./pages/MapPage";
import ChartPage from "./pages/ChartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/charts" element={<ChartPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
