import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Vocab = () => {
  const [vocab, setVocab] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  const [scoreCorrect, setScoreCorrect] = useState(1)
  const [finalScore, setFinalScore] = useState(0);
  const [myArray, setMyArray] = useState([]);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [availableNumbers, setAvailableNumbers] = useState([...Array(9).keys()].map(i => i + 1));
  const [randomId, setRandomId] = useState(1);
  const [propertyName, setPropertyName] = useState(''); // Initialize with the default value if needed
  const [showRomanji, setShowRomanji] = useState(''); // Initialize with the default value if needed
  const [correct, setcorrect] = useState(''); // Initialize with the default value if needed
  const location = useLocation();
  const table = location.state ? location.state.table : "";



console.log("workkkkkksss:"+ table+"<---");


  useEffect(() => {
    fetchData(randomId);
  }, [randomId]);


  

  const fetchData = (id) => {
    axios
      .get(`https://kana-back.onrender.com/${table}/${id}`)
      .then((res) => {
        console.log(res);
        setVocab(res.data);
        setCardColors(Array(res.data.length).fill("card-div-vocab"));
        setPropertyName('');
        setInputValue('');
        setShowRomanji('');
        setcorrect(0);

      })
      .catch((err) => console.log(err));
  };



  // const handleRandomIdClick = () => {
  //   const newRandomId = Math.floor(Math.random() * 10) + 1;
  //   setRandomId(newRandomId);
  // };


  function check(correct) {
    var pass;

    if (correct == 1) {
      pass = 1;
      console.log("can pass");
    } else {
      pass = 0;
      console.log("CANT pass");
    }

    return pass;
  }

  const handleRandomIdClick = (ok, next) => {



    console.log(ok, next);

    if (ok === 1 && next === 1) {

      if (availableNumbers.length === 0) {
        // All numbers have been used
        alert('Kansei!');
        return;
      }
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const newRandomId = availableNumbers[randomIndex];
        setAvailableNumbers(prevNumbers => prevNumbers.filter(num => num !== newRandomId));
        setRandomId(newRandomId);


      }, 10);

    }

    if (ok === 0 && next === 0) {
      console.log("NO NEXT");
    }

  };





  const incrementScore = () => {
    const addOne = scoreCorrect + 1;
    setScoreCorrect(addOne);
    //alert("correct " + scoreCorrect);
  };





  const addItemToArray = (value) => {

    if (!myArray.includes(value)) {

      const newItem = `${value}`;
      setMyArray([...myArray, newItem]);
      console.log("Current" + myArray);

    }

  };

  const changeid = (value) => {
    if (value === "1") {
      setPropertyName('answer');
      setShowRomanji('romanji');
      console.log(propertyName);
    } else {
      setPropertyName('');
      setShowRomanji('');
    }
    console.log(propertyName);

  }




  return (
    <div>
      <div className="container-xxl text-size ">
        <h1 className="home-title">VOCAB</h1>
        <h3 className="">Translate to english<br></br></h3>
        <h5 className="">Press enter to check answer</h5>
        <div className="main-container text-size">
          <div className="card-container-vocab">
            {vocab.map((vocabItem, index) => (
              <div className={cardColors[index]} key={index}>
                <h1 className="word">{vocabItem.question}</h1>
                <h1 className="word">{vocabItem[showRomanji]}</h1>
                <h1 className="word">{vocabItem[propertyName]}</h1>

                <input
                  type="text"
                  className="answer-vocab"
                  name={`input-${index}`}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {

                    if (e.key === "Enter") {
                      setInputValue(e.target.value);
                      const newCardColors = [...cardColors];
                      setPropertyName('');
                      if (inputValue === vocabItem.answer) {
                        newCardColors[index] = "card-div-vocab-green";
                        // scoreIt();
                        changeid("0");
                        setPropertyName('');
                        setcorrect(1);
                        handleRandomIdClick(correct);
                        //check(correct);
                      } else if (inputValue === '' || inputValue !== vocabItem.answer || inputValue === ' ') {
                        newCardColors[index] = "card-div-vocab-red";
                        // scoreIt();
                        changeid("1");
                        setcorrect(0);
                        handleRandomIdClick(correct, 0);
                        //check(correct);
                      } else if (inputValue === '') {
                        newCardColors[index] = "card-div-vocab-red";
                        // scoreIt();
                        changeid("1");
                        setcorrect(0);
                        handleRandomIdClick(0, 0);
                        //check(correct);
                      }
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
          value="Next"
          onClick={() => (handleRandomIdClick(correct, 1))}
        />
      </div>


      {/* <h3> Study again </h3>
      
         onClick={handleRandomIdClick(1)}
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

            
        <button  onClick={goToB} >Go to B</button> */}

      {/*       
      <Results myArray={myArray} />
 */}

    </div>
  );
}
export default Vocab;