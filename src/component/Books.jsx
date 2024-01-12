import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Books = () => {
  const [books, setBooks] = useState([]);




  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3307/books/");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);


const handleDelete = async(id)=>{
    try {
        await axios.delete("http://localhost:3307/books/"+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}


const next = async(id)=>{
  try {
      await axios.get("http://localhost:3307/books/"+id)
      window.location.reload()
  }catch(err){
      console.log(err)
  }
}



  // return (
  //   <div>
  //     <div>BOOKS</div>

  //     <div className="books">
  //       {books.map((book) => (
  //         <div className="book" key={book.id}>
  //           {book.cover && <img src={book.cover} alt="" />}
  //           <h2>{book.title}</h2>
  //           <p>{book.desc}</p>
  //           <span>{book.price}</span>
  //           <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
  //           <button className="update"> <Link to={`/update/${book.id}`}>Update</Link> </button>
  //           <button className="read"> <Link to={`/read/${book.id}`}>DETAIL</Link> </button>
  //         </div>
  //       ))}
  //     </div>

  //     <Link to="/Add">
  //       <br></br>
  //       <button>Add new book</button>
  //     </Link>

  //   </div>
  // );


  return (
    <div>
      <div>BOOKS</div>

      <div className="books">
        {books.map((book) => (
         
            <button className="read"> <Link to={`/read/${book.id}`}>DETAIL</Link> </button>
         
        ))}
      </div>

      <Link to="/read/1">
        <br></br>
        <button>START</button>
      </Link>


      <Link to="/Add">
        <br></br>
        <button>Add new book</button>
      </Link>

    </div>
  );



};
