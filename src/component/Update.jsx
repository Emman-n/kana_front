import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { useLocation } from "react-router-dom";


export const Update = () => {
  const [book, setBooks] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

const navigate = useNavigate();
const loc = useLocation();

const bookId = loc.pathname.split("/")[2]

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
        await axios.put("http://localhost:3307/books/"+bookId, book)
        navigate("/")
    }catch(err){
        console.log(err)
    }
  }

  console.log(book);

  return (
    <div className="form">
      <h1>Update  book </h1>
      <input
        type="text"
        placeholder="tilte"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />

      <button onClick={handleClick}>Update</button>
    </div>
  );
};


