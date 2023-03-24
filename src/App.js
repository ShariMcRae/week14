import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";

// Create a global variable for creating new review ids.
let nextReviewId = 10;

// Application function that creates a default list of movies (movieList), 
// a default list of reviews (reviewList), functions for adding and removing reviews,
// and passes all of these things to a MovieList component.
export default function App() {

  // Variable to hold the path to our movie pics.
  let imagePath = "./images/";

  // Create an array of movies (movieList) in our state.  
  const [movieList, setMovieList] = useState([
    {
      movieId: 1,
      title: "Avatar",
      img: imagePath + "avatar.webp",
      synopsis: `Jake Sully lives with his newfound family formed on the planet 
      of Pandora. Once a familiar threat returns to finish what was previously 
      started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.`,
    },
    {
      movieId: 2,
      title: "Champions",
      img: imagePath + "champions.webp",
      synopsis: `A former minor-league basketball coach is ordered by the court to manage a team 
      of players with intellectual disabilities. He soon realizes that despite his doubts, 
      together, this team can go further than they ever imagined.`,
    },
    {
      movieId: 3,
      title: "Cocaine Bear",
      img: imagePath + "cocaineBear.webp",
      synopsis: `An oddball group of cops, criminals, tourists, and teens converges in a 
      Georgia forest where a 500-pound black bear goes on a murderous rampage after 
      unintentionally ingesting cocaine.`,
    },
  ]);

  // Create an array of reviews (reviewList) in our state.
  const [reviewList, setReviewList] = useState([
    {
      reviewId: 1,
      movieId: 1,
      user: "Shari",
      date: "1/1/2001",
      stars: 1,
      content: `First Avatar review.`,
    },
    {
      reviewId: 2,
      movieId: 1,
      user: "David",
      date: "1/1/2002",
      stars: 2,
      content: `Second Avatar review.`,
    },
    {
      reviewId: 4,
      movieId: 2,
      user: "Tom",
      date: "1/1/2021",
      stars: 3,
      content: `First Champions review.`,
    }
  ]);
  
  // Function for adding a review.
  const addReview = (newReviewData) => {
    const newReview = {
      reviewId: nextReviewId++,
      ...newReviewData,
    }; 
    setReviewList(reviewList.concat(newReview));
  };

  // Function for removing a review.
  const removeReview = (reviewId) => {
    setReviewList(reviewList.filter(review => review.reviewId !== reviewId));
  };

  // Just for future reference on how to update the list...
  // const updateReview = (updatedReview) => {
  //   setReviewList(reviewList.map(review => 
  //     (review.id === updatedReview.reviewId) ?
  //       { ...review, ...updatedReview } :
  //       review
  //   ));
  // };
  
  // Our application consists of a MovieList component.
  return (
    <div className="App">
      <MovieList
        movieList={movieList}
        reviewList={reviewList}
        addReview={addReview}
        removeReview={removeReview}
      />
    </div>
  );
}
