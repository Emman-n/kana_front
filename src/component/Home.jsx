import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
   

   {/* <div className="card imageBack">
      <div className="container card-container">
        <div className="card-body text-center text-white">
          <Link to="/vocab/1">
            <br></br>
            <button type="button" className="btn btn-secondary">START vocab</button>
          </Link>
        </div>
      </div>
    </div> */}
  


 
    <div className="card imageBack">
      <div className="container card-container">
        <div className="card-body  text-white">
          <Link to="/vocab/1">
            <br></br>
            <button type="button" className=" btn  btn-outline-light">Vocab</button>
          </Link>
        </div>
      </div>
    </div>
  
    <div className="card imageBack">
      <div className="container card-container">
        <div className="card-body text-center text-white">
          <Link to="/hira">
            <br></br>
            <button type="button" className="btn btn-outline-light">Hira</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="card imageBack">
      <div className="container card-container">
        <div className="card-body text-center text-white">
          <Link to="/Kata">
            <br></br>
            <button type="button" className="btn btn-outline-light">Kata</button>
          </Link>
        </div>
      </div>
    </div>


  </div>
  
  );
};

export default Home;
