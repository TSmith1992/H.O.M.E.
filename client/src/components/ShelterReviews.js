import React from "react";

export default function ShelterReviews({ currentUser, reviewsS }) {
  return (
    <div>
      {reviewsS
        .filter((review) => review.shelter.id === currentUser.shelters[0].id)
        .map((lReview) => (
          <div key={lReview.id}>
            <h1>ANONYMOUS:</h1>
            <strong>Review Score: </strong>
            {lReview.score}
            <br></br>
            <strong>Review: </strong>
            {lReview.review}
          </div>
        ))}
    </div>
  );
}
