import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { useParams, link } from "react-router-dom";
const Read = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3307/read/" + id)
      .then((res) => {
        console.log(res);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 11);
  const next = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3307/read/${id}`);
      // Process the response if needed
      // For example, you can log the data in the response:
      console.log(response.data);
      // Reload the page after processing
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="books">
      {books.map((book, index) => (
        <div key={index}>
          {book.cover && <img src={book.cover} alt="" />}
          <h2>{book.id}</h2>
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <p>{book.price}</p>

          <input
            type="text"
            className="answer"
            placeholder="text"
            name="input"
          />

          <br></br>
          <br></br>

          <button
            className="next"
            onClick={() => {
              const inputValue = document.querySelector(".answer").value; // Get the input value
              if (inputValue === book.title) {
                next(rndInt);
                alert("Values match!");
              } else {
                alert("Values do not match.");
              }
            }}>
            NEXT
          </button>

          
        </div>
      ))}
    </div>
  );
};

export default Read;



  // app.get("/read/:id",(req, res)=>{
  //     const bookId = 1;

  //       const rndInt = randomIntFromInterval(1, 8)
  //       console.log(rndInt)

  //     const q = `SELECT * FROM books WHERE id = ${rndInt}`;
  //        //const bookId= req.params.id;
  //     db.query(q,[rndInt],(err,data)=>{
  //         if(err) return res.json(err)
  //         return res.json(data)
  //     })
  // })