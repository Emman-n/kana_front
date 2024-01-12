import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useLocation } from 'react-router-dom';




const Results = () => {
  const location = useLocation();
  const numbers = location.state ? location.state.myArray : [];
  const score = location.state ? location.state.finalScore : [];
  const katan = location.state ? location.state.katan : [];
 

  const [cardColors, setCardColors] = useState([]);
  const [vocabList, setVocabList] = useState([]);

 
  let table;

  if (katan === 1) {
    table = 'kata';
    console.log("tablleee:::"+table);
  } else {
    table = 'hira';
    console.log("tablleee:::"+table);

  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = numbers.map(async (id) => {
          const response = await axios.get(`http://localhost:3307/${table}/${id}`);
       
          return response.data[0]; // Assuming the response is an array of objects
        });

        const results = await Promise.all(requests);

        // Set vocab list
        setVocabList(results);

        // Initialize card colors to 'card-div' for each card
        setCardColors(Array(results.length).fill("card-div"));
      } catch (error) {
        console.error(error);
      }
    };

    if (numbers.length > 0) {
      fetchData();
    }
  }, [numbers]);

  return (
    <div>
      <div className="container-xxl">
      <h1 className="title">Results</h1>
        <h2 className="title">Score: {score} </h2>
        <h2 className="title">Practice again</h2>
        <div className="main-container">
          <div className="card-container">
            {vocabList.map((vocabItem, index) => (
              <div className={cardColors[index]} key={index}>
                <h1 className="word">{vocabItem.character}</h1>
                <h1 className="word">{vocabItem.answer}</h1>

               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

 