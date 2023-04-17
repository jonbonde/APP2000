import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NewHome from "./Pages/NewHome";
import Markedsplass from "./Pages/Markedsplass";
import WireframeTool from "./Pages/WireframeTool";
import Registrer from "./Pages/Registrer";
import "./Utilities/Stylesheet.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewHome />} />
          <Route path="Markedsplass" element={<Markedsplass />} />
          <Route path="WireframeTool" element={<WireframeTool />} />
          <Route path="Registrer" element={<Registrer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
