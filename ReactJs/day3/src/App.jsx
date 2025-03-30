import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileCard from './ProfileCard'

function App() {
  // let [num, setNum]=useState(0);

  // const fun = ()=>{
  //   setNum(num+=1);

  // }

  // let [arr, setArr]=useState(['Apple','Mango','Orange'])

  // let [obj,setObj]=useState([
  //   {
  //     name:'aman',
  //     age:20,
  //     color:'green'
  //   },
  //   {
  //     name:'rohan',
  //     age:21,
  //     color:'red'
  //   },
  //   {
  //     name:'sarab',
  //     age:22,
  //     color:'blue'
  //   }
  // ])

  let [profile, setProfile] = useState([
    {
      name: 'Monika',
      age: 20,
      des: "this is description 1",
      src: "images/pic1.jpg"
    },
    {
      name: 'Rohit',
      age: 21,
      des: "this is description 2",
      src: "images/pic2.jpg"
    },
    {
      name: 'Rohan',
      age: 19,
      des: "this is description 3",
      src: "images/pic3.jpg"
    },
    {
      name: 'Sohan',
      age: 24,
      des: "this is description 4",
      src: "images/pic4.jpg"
    },
    {
      name: 'Raman',
      age: 26,
      des: "this is description 5",
      src: "images/pic5.jpg"
    },
    {
      name: 'Ronak',
      age: 25,
      des: "this is description 6",
      src: "images/pic6.jpg"
    },
    
  ])

  let [val, setVal]=useState('');

  const inputData = (e)=>{
    setVal(e.target.value.toUpperCase());

  }
  const txt = ()=>{
    setVal(val.toUpperCase())
  }
  const txtt =()=>{
    setVal(val.toLowerCase())
  }
  

  return (
    <>
<div className="row">

    {profile.map((value,index)=>{
      return(
        <ProfileCard name={value.name} des={value.des} src={value.src}/>
      )
      
    })}

    </div>
      {/* <h1>{num}</h1>
      <button onClick={fun}>click {num}</button> */}
      <ul>
        {/* {arr.map((value,index,arr)=>{
        return (
          <li key={index}>{value}</li>
        )
      })} */}
      </ul>

      {/* {obj.map((value,index)=>{
      return(
        <div key={index}>
          <h1 style={{color:value.color}}>Name : {value.name}</h1>
          <p style={{backgroundColor:value.color}}>Age : {value.age}
          </p>
        </div>
      )
    })} */}

{/* <div className="row">

      {profile.map((value,index)=>{
        
        return(
          <>
          <ProfileCard name={value.name} des={value.des} src={value.src}/>
          </>
        )
 
      })}
      </div> */}

      {/* <input type="text" onChange={inputData} value={val} maxLength={5}  />
      <p>{val} </p>
      <p>{val.length} </p>
      <button onClick={txt}>click</button>
      <button onClick={txtt}>Lowercase</button> */}


    </>
  )
}

export default App
