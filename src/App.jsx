import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "/src/pages/Home/Home";
import Playlist from "/src/pages/Playlist/Playlist";
import Search from "/src/pages/Search/Search";
import Layout from "/src/pages/layouts/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
