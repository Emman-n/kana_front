import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, link } from "react-router-dom";


 
  const Vocab = () => {
    const numbers = [ 4, 5 ];
    const [vocabList, setVocabList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const requests = numbers.map(async (id) => {
            const response = await axios.get(`http://localhost:3307/hira/${id}`);
            return response.data[0]; // Assuming the response is an array of objects
          });
  
          const results = await Promise.all(requests);
          setVocabList(results);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [numbers]);
  
    return (
      <div>
        {vocabList.map((hira, index) => (
          <div key={index}>
             <h2>{hira.id}</h2>
             <h2>{hira.characterr}</h2>
          
  
            
          </div>
        ))}
      </div>
    );
  };
  
  export default Vocab;