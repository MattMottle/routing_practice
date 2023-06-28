import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import IsNumber from  "./components/IsNumber";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:input/:color/:backgroundColor" element={<IsNumber/>}/>
        <Route path="/:input" element={<IsNumber/>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;