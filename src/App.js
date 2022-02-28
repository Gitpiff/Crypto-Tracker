import React from "react";
import Home from "./Home"
import Learn from "./Learn";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/learn" element={<Learn />} />
       <Route path="/search" element={<Search />} />
     </Routes>
   </div>
  );
}

export default App;

