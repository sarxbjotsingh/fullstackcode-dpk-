import React from 'react'

function ProfileCard(props) {
 const {name,des,src,age,login}=props.data;
  return (
    <>
      <div className="col-sm-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{des}</p>
            <p className="card-text" style={age>=18?{color:"green"}:{color:"red"}}>{age>=18?"eligible":"not eligible"}</p>
            
            <button className="btn btn-primary">Go somewhere</button>
          {props.login?<h1>Welcome</h1>:<h1>login first</h1>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
