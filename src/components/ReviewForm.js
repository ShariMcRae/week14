import { useState } from "react";
import Stars from "./Stars";

// A form that gathers the user, the review,
// and the number of stars for a given movie review.
// Component Stars is used to provide
// a GUI for entering the number of stars.
export default function ReviewForm(props) {

  // The state of a review.
  const [userValue, setUserValue] = useState("");
  const [starsValue, setStarsValue] = useState(0);
  const [contentValue, setContentValue] = useState("");

  // Prevent default form submission behavior.
  // Create a new Review object with data from the form,
  // injecting the movieId from
  // props.movie.movieId and today's date.
  const handleSubmit = (event) => {
    event.preventDefault();
    let today = new Date().toLocaleDateString();
    props.addReview({
      movieId: props.movie.movieId,
      user: userValue,
      date: today,
      stars: Number(starsValue),
      content: contentValue,
    });
    setUserValue("");
    setStarsValue(0);
    setContentValue("");
  };

  // Render a form for creating a new review with a Create button
  // that calls handleSubmit function when clicked.
  return (
    <form>
      <h5>Review {props.movie.title}</h5>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={userValue}
              onChange={(e) => setUserValue(e.target.value)}
            />
          </div>
          <div className="col-sm-6 pt-4">
            <Stars rating={starsValue} setRating={setStarsValue} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label className="form-label">Comments</label>
            <input
              type="text"
              className="form-control"
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary mt-3 mb-2 btn-sm"
        onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
