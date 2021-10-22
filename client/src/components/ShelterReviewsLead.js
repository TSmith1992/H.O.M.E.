import React from "react";
import Card from "@mui/material/Card";

export default function ShelterReviewsLead({ currentUser, reviewsS, shelter }) {
  return (
    <div >
      
      {reviewsS?<>
        {reviewsS
        .filter((review) => review.shelter.id === shelter.id)
        .map((lReview) => (
          <div key={lReview.id} style={{border: '2px solid #B0E0E6',               textShadow:
          "0 0 1px #B0E0E6, 0 0 1px #B0E0E6, 0 0 1px yellow, 0 0 1px #B0E0E6"}}><br></br>
            <strong><h3>ANONYMOUS:</h3>
            <strong>Review Score: </strong>
            {lReview.score}
            <br></br><br></br>
            <strong>Review: </strong>
            {lReview.review}<br></br><br></br><br></br>
          </strong></div>
        ))}
      </>:<>Loading...</>}
      <br></br>
      
      </div>
  );
}
