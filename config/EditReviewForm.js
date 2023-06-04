import React, { useState } from 'react';

function EditReviewForm({ review, onUpdateReview }) {
  const [comment, setComment] = useState(review.comment);
  const [score, setScore] = useState(review.score);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        score: score,
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => onUpdateReview(updatedReview));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <label>
        Score:
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      </label>
      <button type="submit">Update Review</button>
    </form>
  );
}

export default EditReviewForm;
