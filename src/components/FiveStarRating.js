// Component for displaying a 5 star interactive div where
// the user can click on one of 5 stars to give a rating.
export default function FiveStarRating(props) {
  
  // If the rating is being changed, update to reflect new rating.
  // Otherwise, user is clicking on same rating, so we will deselect it.
  const handleClick = (event) => {
    if (props.rating !== event.target.className)
      props.setRating(event.target.className);
    else if (props.rating === event.target.className) props.setRating(0);
  };

  // Render five stars where x are filled to reflect a rating of x.
  // Use the className of the h2 elements (the onClick event target)
  // to communicate the rating.
  return (
    <div className="row">
      <div className="star col-sm-1" onClick={handleClick}>
        <h2 className="1">{props.rating >= 1 ? "\u2605" : "\u2606"}</h2>
      </div>
      <div className="star col-sm-1" onClick={handleClick}>
        <h2 className="2">{props.rating >= 2 ? "\u2605" : "\u2606"}</h2>
      </div>
      <div className="star col-sm-1" onClick={handleClick}>
        <h2 className="3">{props.rating >= 3 ? "\u2605" : "\u2606"}</h2>
      </div>
      <div className="star col-sm-1" onClick={handleClick}>
        <h2 className="4">{props.rating >= 4 ? "\u2605" : "\u2606"}</h2>
      </div>
      <div className="star col-sm-1" onClick={handleClick}>
        <h2 className="5">{props.rating >= 5 ? "\u2605" : "\u2606"}</h2>
      </div>
    </div>
  );
}
