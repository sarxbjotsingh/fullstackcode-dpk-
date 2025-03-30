import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Img1 from './images/pic.jpg'
import Img2 from './images/pic2.jpg'
function App() {

  const fun =(e)=>{
    // alert("props function");
    // console.log(e.target.innerHTML);
    console.log(e);
  }
  
   return (
     <>
     {/* <h1 className='bg-primary text-light'>hello</h1> 
     <h1 className='bg-success'>hello</h1>  */}

      <div className="row">

     <Card name="Sunita" src="images/pic.jpg" fn={()=>fun(0)}/>
     <Card name="Aman" src="images/pic2.jpg" fn={fun}/>
     <Card name="Raman" src={Img1} fn={fun}/> 
     <Card name="Vanshika" src={Img2} fn={fun}/>
    
      </div>
    </>
  )
}

export default App
