import React from "react";
import Card from "@mui/material/Card";

export default function ShelterReviewsLead({ currentUser, reviewsS, shelter }) {
  return (
    <div>
      
      {reviewsS?<>
        {reviewsS
        .filter((review) => review.shelter.id === shelter.id)
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
      </>:<>Loading...</>}
      </div>
  );
}
