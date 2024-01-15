import React from "react";
import Login from "./components/Form/Login";
import Data from "./components/Data/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" dir="rtl">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
