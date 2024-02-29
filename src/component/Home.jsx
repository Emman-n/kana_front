import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
    <div>
      <h1 className="title"> Vocab and character practice</h1>
  
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href="/VocabMenu" className="btn btn-outline-light home-title">
                  Vocab
                </a>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href="/hira" className="btn btn-outline-light home-title">
                  Hira
                </a>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                <a href="/Kata" className="btn btn-outline-light home-title">
                  Kata
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
  };  

export default Home;
