// import MoviePlaylist from "./movieShow"
import React, { useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Filter from './Filter';

function MovieList(){
  const [filterType, setFilterType] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  
  const [movie, SetMovie] = useState([]);
  useEffect(()=> {
      const Movies = [
      {
        title: "Game of Thrones",
        description: "Drama, Action, Adventure",
        rating: 9.0,
        posterURL: "https://gameofthrones.com"
      },
      {
        title: "Viking",
        description: "Drama, Action, Adventure",
        rating: 8.5,
        posterURL: "https://vikings.com"
      },
      {
        title: "A Day of the Jackal",
        description: "Action, Thriller, Crime",
        rating: 8.7,
        posterURL: "https://dayofthejackal.com"
      }
    ];
    SetMovie(Movies);
  }, []);

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
            <ListGroup.Item>URL: {posterURL} </ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
      );
  }
  return(
    <div>
      <h1>Movie List</h1>
      <Filter onFilterChange={handleFilterChange} filterType={filterType} filterValue={filterValue} />
      {filteredMovies.map((item, index) => (
        <MovieCard key={index} {...item} />
      ))}
    </div>
  );
}

export default MovieList;