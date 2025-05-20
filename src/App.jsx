
import React from "react"
import Footer from "./components/Footer/Footer"

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Try from './components/Try/Try';


function App() {
  return (
    <>

      

      <Navbar />
      <Footer/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/try" element={<Try />} />
      </Routes>
      

    </>
  );
}

export default App;
