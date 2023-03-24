import "./Movie.css";
import React from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

// Component to display data for one movie,
// including all of it's reviews (ReviewList component) and a
// form (ReviewForm component) for entering additional reviews.
export default function Movie(props) {
  
  // Extract the reviews for this movie from the entire list of reviews.
  let movieReviews = props.reviewList.filter(
    (review) => props.movie.movieId === review.movieId
  );

  // Calculate the average number of stars reviewers gave this movie.
  let total = 0;
  movieReviews.forEach((review) => (total += review.stars));
  let average = total === 0 ? 0 : Math.round(total / movieReviews.length);

  // Function to create a string that displays the star rating graphically.
  // This function is used here to disply the average rating for a
  // movie and is also passed to ReviewList to be used to display
  // the stars for each individual review.
  function starDisplay(numberOfStars) {
    let stars = "";
    for (let i = 0; i < numberOfStars; i++) stars += "\u2605";
    for (let i = numberOfStars; i < 5; i++) stars += "\u2606";
    return stars;
  }

  // Render one movie, including all of it's reviews (ReviewList component) and a
  // form for creating additional reviews (ReviewForm component).
  return (
    <div className="card border-dark my-4 mx-auto">
      <div className="card-header movie-color">
        <div className="container">
          <div className="row movie-header py-1">
            <div className="col-2 h-100 pt-1">
              <img src={props.movie.img} alt="avatar" className="movie-img" />
            </div>
            <div className="col-10 movie-middle">
              <h3>
                {props.movie.title} {starDisplay(average)} 
              </h3><img
                  src={props.movie.restriction}
                  alt="restriction"
                  className="movie-restriction"
                /><br/><br/>
              {props.movie.synopsis}
            </div>
          </div>
        </div>
      </div>
      <div className="card-body text-dark">
        <ReviewList
          movieId={props.movie.movieId}
          reviewList={props.reviewList}
          starDisplay={starDisplay}
          removeReview={props.removeReview}
        />
      </div>
      <div className="card-footer movie-color-light">
        <ReviewForm movie={props.movie} addReview={props.addReview} />
      </div>
    </div>
  );
}
