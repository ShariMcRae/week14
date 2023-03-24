import React from "react";
import Movie from "./Movie";

// Component for displaying a list of movies. It expects a "movieList" property
// holding a array of movie objects, a "reviewList" property holding an array
// of all movie reviews, and functions for adding and removing reviews ("addReview" 
// and "removeReview"). It uses a Movie component to render each movie. Movie 
// components also display the reviews and a form for creating a review.
export default function MovieList(props) {
  
  return (
    <div className="container">
      <div className="my-3 w-75 mx-auto">
        <h2>Movie Reviews</h2>
      </div>
      {props.movieList.map((movie) => (
          <Movie
            key={movie.movieId}
            movie={movie}
            reviewList={props.reviewList}
            addReview={props.addReview}
            removeReview={props.removeReview}
          />
      ))}
      
    </div>
  );
}
