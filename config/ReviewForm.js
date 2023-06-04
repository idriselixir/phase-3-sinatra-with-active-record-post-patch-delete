import React, { useState } from 'react';

function ReviewForm({ userId, gameId, onAddReview }) {
  const [comment, setComment] = useState("");
  const [score, setScore] = useState("0");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        score: score,
        user_id: userId,
        game_id: gameId,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onAddReview(newReview));
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
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewForm;
