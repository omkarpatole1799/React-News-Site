import React from 'react'

function Notes() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-primary">Add Note</button>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Notes Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notes