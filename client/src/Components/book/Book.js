import React from "react";
import "./Book.css";
import SubHeader from "../subheader/SubHeader";

const Book = ({ src, title, author }) => {
  const alt = `${title} book cover`;

  return (
    <div className="book-card">
      <img src={src} className="book-img" alt={alt}></img>
      <SubHeader className="book-title" text={title} size={2}></SubHeader>
      <SubHeader text={author} size={4}></SubHeader>
    </div>
  );
};

export default Book;
