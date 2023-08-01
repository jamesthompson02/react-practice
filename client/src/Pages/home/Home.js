import React from "react";
import "./Home.css";
import Header from "../../Components/header/Header";
import BookList from "../../Components/booklist/BookList";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../../State/search/reducers/index";

const Home = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(updateSearchTerm(searchTerm));
  };
  return (
    <div className="home-background">
      <Header text="Top 3 Books"></Header>
      <input type="text" onChange={handleChange}></input>
      <BookList></BookList>
    </div>
  );
};

export default Home;
