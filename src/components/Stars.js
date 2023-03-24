import "./Stars.css";

// Component for displaying a 5 star interactive div where
// the user can click on one of 5 stars to give a rating.
// Creating a css class "star" can be used to style the stars.
export default function Stars(props) {
  
  // If the rating is being changed, update to reflect new rating.
  // Otherwise, user is clicking on same rating, so we will deselect it.
  const handleClick = (rating) => {
    if (props.rating !== rating) props.setRating(rating);
    else if (props.rating === rating) props.setRating(0);
  };

  // Render five stars where x are filled to reflect a rating of x.
  return (
    <div>
      <span className="star" onClick={() => handleClick(1)}>
        {props.rating >= 1 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(2)}>
        {props.rating >= 2 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(3)}>
        {props.rating >= 3 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(4)}>
        {props.rating >= 4 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(5)}>
        {props.rating >= 5 ? "\u2605" : "\u2606"}
      </span>
    </div>
  );
}
