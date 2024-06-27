import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Search from "/src/pages/Search/Search";
import About from "/src/pages/About/About";
import Layout from "/src/pages/layouts/Layout/Layout";
import Stats from "/src/pages/Stats/Stats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
