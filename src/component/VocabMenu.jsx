import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export const VocabMenu = () => {
  return (
    <div>
      <h1 className="title"> Choose a vocab topic</h1>
  
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href="/vocab/3333333333" className="btn btn-outline-light home-title">
                  Colors
                </a>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href="/hira" className="btn btn-outline-light home-title">
                  Weather
                </a>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href="/Kata" className="btn btn-outline-light home-title">
                  Transport
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
  };  

export default VocabMenu;
//          <Link to="/vocab/3333333333">
