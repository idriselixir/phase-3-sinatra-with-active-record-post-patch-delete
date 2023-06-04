import React from 'react';

function ReviewItem({ review, onDeleteReview }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedReview) => onDeleteReview(deletedReview));
  }

  return (
    <div>
      <p>Score: {review.score}</p>
      <p>{review.comment}</p>
      <button onClick={handleDeleteClick}>Delete Review</button>
    </div>
  );
}

export default ReviewItem;
