import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/users')
    .then((res)=> setData(res.data))
    .catch((error)=> console.error("error data",error));
  },[]);
  console.log(data);
  return (
    <>
      
    </>
  )
}

export default App
