import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
function Blog() {
    const [data, setData]=useState([]);
    useEffect(()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((res)=>setData(res.data))
        .catch((error) => console.error("Error fetching data:", error));

    },[])
    console.log(data)
  return (
    <>
      <h1>This is Blog Page</h1>
        {/* {data.map((value,index)=>{
            return (
            
            <h1>{value.email}</h1>

            )
        })} */}

      
    </>
  )
}

export default Blog
