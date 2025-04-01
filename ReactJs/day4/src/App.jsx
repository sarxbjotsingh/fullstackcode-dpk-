import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NavBar from './components/NavBar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './view/Home';
import About from './view/About';
import Contact from './view/Contact';
import Blog from './view/Blog';

function App() {
  // let [time,setTime]=useState(0);
  // useEffect(()=>{
  //   alert("hello");
  // },[time])
  return (
    <>
      {/* <p>{time}</p>
      <button onClick={()=>{setTime(time+=1)}}>click</button> */}

      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
