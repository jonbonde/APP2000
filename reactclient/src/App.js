import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Markedsplass from "./Pages/Markedsplass";
import WireframeTool from "./Pages/WireframeTool";
import LoggInn from "./Pages/LoggInn"
import "./Utilities/Stylesheet.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Markedsplass" element={<Markedsplass />} />
          <Route path="WireframeTool" element={<WireframeTool />} />
          <Route path="LoggInn" element={<LoggInn />} />
          <Route path="*" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
