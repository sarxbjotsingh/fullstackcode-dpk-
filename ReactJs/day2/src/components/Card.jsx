import React from 'react'

function Card(props) {

    return (
        <>
            <div className="col-sm-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button onClick={props.fn} className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
