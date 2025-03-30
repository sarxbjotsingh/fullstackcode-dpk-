import React from 'react'

function ProfileCard(props) {
  return (
    <>
      <div className="col-sm-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.des}</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
