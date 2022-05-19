import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/login-page';
import Next from './pages/next';
export default function App() {
  return (
   <div>
     
     <Routes>
       <Route path="/" element={<Login/>}> </Route>
       <Route path="next" element={<Next/>}></Route>
       </Routes>
   </div>
  )
}
