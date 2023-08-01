import React from "react";
import { useEffect, useState } from "react";
import "./BookList.css";
import books from "../../Dummy-Data/books.json";
import Book from "../book/Book";
import { useSelector } from "react-redux";

const BookList = () => {
  const [booksList, setBooksList] = useState(books);

  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    if (searchTerm) {
      const bookList = books.filter((book) => {
        if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      setBooksList(bookList);
    } else {
      setBooksList(books);
    }
  }, [searchTerm]);

  return (
    <div className="container">
      {booksList.map((book, index) => {
        return (
          <Book
            key={index}
            src={book.src}
            title={book.title}
            author={book.author}
          ></Book>
        );
      })}
    </div>
  );
};

export default BookList;
