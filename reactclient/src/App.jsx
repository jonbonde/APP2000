import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NewHome from "./Pages/Home";
import Markedsplass from "./Pages/Markedsplass";
import WireframeTool from "./Pages/WireframeTool";
import LoggInn from "./Pages/LoggInn"
import WFTest from "./Pages/WFTest";
import "./Utilities/Stylesheet.css";
import Test from "./Pages/Test";
import LagInnlegg from "./Pages/LagInnlegg";
import CreateCommission from "./Pages/CreateCommission";

export default function App() {
  const loggedIn = window.localStorage.getItem("loggetInn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Markedsplass" element={<Markedsplass />} />
          <Route path="WireframeTool" element={<WireframeTool />} />
          <Route path="LoggInn" element={<LoggInn />} />
          <Route path="WFTest" element={<WFTest />} />
          <Route path="Test" element={<Test />} />
          <Route path="CreateCommission" element={<CreateCommission />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
