import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, link } from "react-router-dom";
import img1 from "../images/img1.png";
import Results from "./Results";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';



const Hira = () => {
  const { id } = useParams();
  const [vocab, setVocab] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  const [scoreCorrect, setScoreCorrect] = useState(1);
  const [scoreInCorrect, setScoreInCorrect] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const myList = [1, 2, 3, 4, 5];
  const myList2 = [5,4,3,2,1];
  const [myArray, setMyArray] = useState([ ]);

  useEffect(() => {
    axios
      .get("http://localhost:3307/hira/")
      .then((res) => {
        console.log(res);
        setVocab(res.data);
        // Initialize card colors to 'card-div' for each card
        setCardColors(Array(res.data.length).fill("card-div"));
      })
      .catch((err) => console.log(err));
  }, []);

  const incrementScore = () => {
    const addOne = scoreCorrect+1;
    setScoreCorrect(addOne);
    alert("correct " + scoreCorrect);
  };
 

  const scoreIt = (value) => {
    const calculatedScore = (scoreCorrect / 46) * 100;
    const roundedScore = calculatedScore.toFixed(1);
    setFinalScore(parseFloat(roundedScore));
    alert(scoreCorrect+ "/ 46 * 100::" +
    "FINAL SCORE::"+ finalScore );
    
  };

  const addItemToArray = (value) => {

    if (!myArray.includes(value)) {
      
      const newItem = `${value}`;
      setMyArray([...myArray, newItem]);
      console.log("Current" + myArray);

    } 


 
  
  };

  const goToB = () => {
    // Navigate to B component
    navigate('/Results', { state: { myArray, finalScore } });
    //console.log(myArray);
  };
   



  return (
    <div>
      <div className="container-xxl">
      <h1 className="title">HIRA HIRA</h1>
      <div className="main-container">
        <div className="card-container">
          {vocab.map((vocabItem, index) => (
            <div className={cardColors[index]} key={index}>
              <h1 className="word">{vocabItem.character}</h1>

              <input
                type="text"
                className="answer"
                name={`input-${index}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const inputValue = e.target.value;
                    const newCardColors = [...cardColors];

                    if (inputValue === vocabItem.answer) {
                      newCardColors[index] = "card-div-green";
                      incrementScore();
                      scoreIt();
                  
                    } else if (inputValue === "" || inputValue !==  vocabItem.answer ) {
                      newCardColors[index] = "card-div-red";
                      alert(vocabItem.characterr);
                      addItemToArray(vocabItem.id);
                      scoreIt();
                    } 
              
                    // Update the state to re-render with new colors
                    setCardColors(newCardColors);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div> 
      </div>

      <div className="container-sm" >
        <input
              type="button"
              className="finalScore"
              name="scoreIt"
              placeholder="final"
              value="Finish"
              onClick={goToB}
            />
      </div>
 
 
{/* <h3> Study again </h3>
      
       
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

            
        <button  onClick={goToB} >Go to B</button> */}
    
{/*       
      <Results myArray={myArray} />
 */}

    </div>
  );
};




export default Hira;
