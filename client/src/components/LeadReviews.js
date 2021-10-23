import React, { useState, useEffect } from "react";

export default function LeadReviews({ currentUser, reviews }) {
  return (
    <div className="container1">
      {reviews ? (
        <>
          {" "}
          {reviews
            .filter((review) => review.lead.id === currentUser.lead_info.id)
            .map((lReview) => (
              <div key={lReview.id} class="saloncard">
                <h1>ANONYMOUS:</h1>
                <strong>Review Score: </strong>
                {lReview.score}
                <br></br>
                <strong>Review: </strong>
                {lReview.review}
              </div>
            ))}
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
