import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate  } from 'react-router-dom';


export const VocabMenu = () => {
  const navigate = useNavigate();
  const table = '';  

  const handleClick = () => {
     navigate('/vocab/1', { state: { table: "vocab" } });
  };
  
  const QuestionsVocab = () => {
     navigate('/vocab/1', { state: { table: "questions" } });
  };

  const TransportVocab = () => {
    navigate('/vocab/1', { state: { table: "transport" } });
 };

  return (
    <div>
      <h1 className="title"> Choose a vocab topic</h1>
    
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">

          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                 {/* Use onClick to handle navigation */}
                 <button onClick={handleClick} className="btn btn-outline-light home-title">
                  Colors
                </button>
              </div>
            </div>
          </div>
  
       
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                 {/* Use onClick to handle navigation */}
                 <button onClick={QuestionsVocab} className="btn btn-outline-light home-title">
                   Questions
                </button>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card card-home imageBack">
              <div className="card-body d-flex justify-content-center align-items-center">
                 {/* Use onClick to handle navigation */}
                 <button onClick={TransportVocab} className="btn btn-outline-light home-title">
                 Transport/Vehicles
                </button>
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
