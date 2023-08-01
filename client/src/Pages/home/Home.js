import React from "react";
import "./Home.css";
import Header from "../../Components/header/Header";
import BookList from "../../Components/booklist/BookList";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../../State/search/index";
import SubHeader from "../../Components/subheader/SubHeader";

const Home = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(updateSearchTerm(searchTerm));
  };
  return (
    <div className="home-background">
      <Header text="Top 3 Books"></Header>
      <div className="search-container">
        <SubHeader text="Search Books" size={3}></SubHeader>
        <input type="text" onChange={handleChange}></input>
      </div>
      <BookList></BookList>
    </div>
  );
};

export default Home;
