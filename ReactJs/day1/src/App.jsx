import React from 'react'
import ProfileCard from './components/ProfileCard'
import Profile from './components/Profile'
import Card1 from './components/Card1'
import './App.css'
function App() {
  return (
    <>
      <Card name="PIET" desc="this is paragraph"/>
      <Card name="AMAN" desc="this is paragraph"/>
      <ProfileCard/>
      <Profile/>
      <Card1/>
    </>
  )
}

const Card = (props)=>{
  let name = "Aman";
  return (
    <>
      <h1>hello {props.name}</h1>
      <h1>{2+4}</h1>
        <p>{props.desc}</p>
       </>
  )
}



export default App
