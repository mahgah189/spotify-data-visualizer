import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "/src/pages/Home/Home";
import Playlist from "/src/pages/Playlists/Playlists";
import Layout from "/src/pages/layouts/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/playlists" element={<Playlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
