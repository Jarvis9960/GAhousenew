import React from "react";

function ThankYou() {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="mt-5 mb-5 pb-5 pt-5"></div>
        <div className="col text-center mt-5  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            className="bi bi-check2-circle"
            viewBox="0 0 16 16"
            style={{ color: "green" }}
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </div>

        <div className="col text-center mt-5 mb-5">
          <h1>Thank you for registration.</h1>
          <h4>Please verify your Account</h4>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
