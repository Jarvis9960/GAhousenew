import React from "react";

function Modal({ setOpenModal }) {
    return (
        <div className="row opacity-100" style={{ border: "2px solid black", width: "500px" }}>
            <div className="col-sm-6">
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title"> Thanks for your Suggestion </h5>
                        <p className="card-text">       Will Contact You Soon      </p>

                    </div>
                </div>
            </div>
            <div className="footer">
                <button
                    onClick={() => {
                        setOpenModal(false);
                    }}
                    id="cancelBtn"
                >
                    Cancel
                </button>
                <button>Continue</button>
            </div>
        </div>
    )
}

export default Modal;