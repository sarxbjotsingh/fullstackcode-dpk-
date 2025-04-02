import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
function Blog() {
    const [data, setData]=useState([]);
    useEffect(()=>{
    axios.get("https://fake-json-api.mock.beeceptor.com/users")
        .then((res)=>setData(res.data))
        .catch((error) => console.error("Error fetching data:", error));

    },[])
   console.log(data);
  return (
    <>
      <h1>This is Blog Page</h1>
       {/* <p>{data.setup}</p> */}

      {data.map((val, index)=>{
        return(
          <>
            <img src={val.photo} alt={val.photo} width={100} />
            <h1>{val.name}</h1>
          </>
        )
      })}
    </>
  )
}

export default Blog
