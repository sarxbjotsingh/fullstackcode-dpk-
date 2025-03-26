import React from 'react'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {

  const fun = ()=>{
    alert("this is alert function");
  }
  return (
    <>
      <Card name="PIET" color="red"/>
      <Card name="Rohan" color="green"/>
      <ProfileCard/>
      <button onClick={fun}>click</button>
   </> 
  )
}

const Card = (props)=>{
  return (
    <>
    <h1 style={{color:props.color}}>Hello {props.name}</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}
 

export default App
