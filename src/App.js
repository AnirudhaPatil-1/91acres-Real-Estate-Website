// import logo from './logo.svg';
import React from "react";

import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import Banner from "./components/Banner";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white ">
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
