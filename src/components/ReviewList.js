import React from "react";
import Review from "./Review";

// ReviewList displays all movie reviews in the "reviewList"
// property that have a movieId matching the "movieId" property.
// It expects a "starDisplay" property that is a function for
// creating a string to graphically display a given number of stars.
// It calls this function, passing the string down to the Review Component.
// ReviewList also accepts and passes to the Review Component 
// a "removeReview" property that is a function
// for removing a review with a given reviewId.
export default function ReviewList(props) {
  
  // Create a local variable to hold the list of reviews for
  // an individual movie referenced by the movieId property.
  const reviewList = props.reviewList.filter(
    (review) => review.movieId === props.movieId
  );

  return (
    <div>
      <h5>Audience Reviews</h5>
      {(reviewList.length === 0) ? 
          <span>Be the first to submit a review!</span> : 
          reviewList.map((review) => (
            <Review
              key={review.reviewId}
              review={review}
              strOfStars={props.starDisplay(review.stars)}
              removeReview={props.removeReview}
            />
          ))
      }
    </div>
  );
}
