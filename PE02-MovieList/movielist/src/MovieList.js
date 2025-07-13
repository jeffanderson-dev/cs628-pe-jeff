// jeff anderson CS628 PE02
import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { title: 'Jurassic Park', genre: 'Sci-Fi', releaseYear: 1993 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
    { title: 'Ratatouille', genre: 'Animation', releaseYear: 2001 },
    { title: 'Dead Man', genre: 'Western', releaseYear: 1995 },
  ];

  // selected genre from the dropdown
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  // function gets called when the dropdown changes
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // function gets called when a movie is clicked
  const handleMovieClick = (title) => {
    alert('You clicked on: ' + title);
  };

  // make a new list to store only the movies we want to show
  let visibleMovies = [];

  // if the user picks "All Genres", show everything
  if (selectedGenre === 'All Genres') {
    visibleMovies = movies;
  } else {
    // otherwise, only show movies that match the genre
    visibleMovies = movies.filter(function (movie) {
      return movie.genre === selectedGenre;
    });
  }

  // get the list of genres for the dropdown
  const genreList = ['All Genres'];
  for (let i = 0; i < movies.length; i++) {
    const genre = movies[i].genre;
    if (!genreList.includes(genre)) {
      genreList.push(genre);
    }
  }

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>

      {/* genre dropdown */}
      <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
        {genreList.map(function (genre) {
          return <option key={genre} value={genre}>{genre}</option>;
        })}
      </select>

      {/* movie cards */}
      <div className="movie-cards">
        {visibleMovies.map(function (movie) {
          return (
            <div
              key={movie.title}
              className="movie-card"
              onClick={() => handleMovieClick(movie.title)}
            >
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
              <p>{movie.releaseYear}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
