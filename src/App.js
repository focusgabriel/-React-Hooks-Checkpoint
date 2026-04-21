// import MoviePlaylist from "./movieShow"
import React, { useState, useEffect, useRef} from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Filter from './Filter';
import Movies from "./movieList";
import './style.css'

function MovieList(){
  const [filterType, setFilterType] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  
  const [movie, SetMovie] = useState([...Movies]);

  const Title = useRef();
  const Description = useRef();
  const Rating = useRef();
  const PosterURL = useRef();

  function handleClick(){
    const newMovie = {
      title: Title.current.value,
      description: Description.current.value,
      rating: Number(Rating.current.value),
      posterURL: PosterURL.current.value
    };

    SetMovie(prevMovies => [...prevMovies, newMovie]);

    Title.current.value = "";
    Description.current.value = "";
    Rating.current.value = "";
    PosterURL.current.value = "";
  }

  const handleFilterChange = (type, value) => {
    setFilterType(type);
    setFilterValue(value);
  };

  const filteredMovies = movie.filter((item) => {
    if (filterType === "title") {
      return item.title.toLowerCase().includes(filterValue.toLowerCase());
    } else if (filterType === "rating") {
      return filterValue === "" || item.rating >= parseFloat(filterValue);
    }
    return true;
  });


  const MovieCard = ({title, description, rating, posterURL}) => {
    return (
        <div className='cardbox' >
        <Card style={{ width: '18rem'}}>
          <Card.Header>Movie Card</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Title: {title} </ListGroup.Item>
            <ListGroup.Item>Description: {description} </ListGroup.Item>
            <ListGroup.Item>Rating: {rating} </ListGroup.Item>
            <ListGroup.Item>PosterURL: {posterURL} </ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
      );
  }

  return(
  <div className="main">
    <div className="filter">
      <h1>Movie List</h1>
      <Filter onFilterChange={handleFilterChange} filterType={filterType} filterValue={filterValue} />
      
    </div>
      <div className="addMovie">
        <h1> Add New Movies</h1>
        <input ref={Title} placeholder="enter a title" type="text" />
        <input ref={Description} placeholder="enter a description" type="text" />
        <input ref={Rating} placeholder="enter a rating" type="text" />
        <input ref={PosterURL} placeholder="enter a posterURL" type="text" />
        
        <button onClick={handleClick}>Submit</button>
      </div>
      {filteredMovies.map((item, index) => (
        <MovieCard key={index} {...item} />
      ))}
  </div> 
  );
}

export default MovieList;