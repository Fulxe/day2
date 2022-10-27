import "./App.css";
import React from "react";
import First from "./First";
import Second from "./Second";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Pages">
        <div className="First">
          <BrowserRouter>
            <Link className="link1" to="/First">First</Link>
            <Routes>
              <Route path="/First" element={<First />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div className="Second">
          <BrowserRouter>
            <Link className="link1" to="/Second">Second</Link>
            <Routes>
              <Route path="/Second" element={<Second />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default About;
