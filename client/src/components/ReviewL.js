import React, { useState } from "react";
import ShelterReviewsLead from "./ShelterReviewsLead";

export default function ReviewL({ currentUser, reviewsS }) {
  const [showReviews, setShowReviews] = useState(false);
  const [showMyReviews, setShowMyReviews] = useState(false);
  return (
    <div>
      <img
        src={currentUser.picture}
        alt="Profile"
        width="300px"
        height="300px"
      />
      <p>About you:</p>
      <h3>{currentUser.description}</h3>
      <p>Average Rating:</p>
      <h3>{currentUser.avg_rating_lead}</h3>
      <h1>Your Reviews:</h1>
      <br></br>
      <button onClick={() => setShowMyReviews(!showMyReviews)}>
        {showMyReviews ? (
          <>Click here to hide your reviews</>
        ) : (
          <>Click here to see your reviews</>
        )}
      </button>
      {showMyReviews ? (
        <div>
          {currentUser.migrant_lead_reviews.map((lReview) => (
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
      ) : (
        <></>
      )}
      <h1>Your Shelters' Reviews:</h1>
      <button onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? (
          <>Click here to hide shelter reviews</>
        ) : (
          <>Click to read shelter reviews</>
        )}
      </button>
      <br></br>
      {currentUser.shelters.map((shelter) => (
        <div key={shelter.id}>
          <h1>{shelter.name}</h1>
          <img
            src={shelter.picture}
            alt="Profile"
            width="300px"
            height="300px"
          />
          <p>Address:</p>
          <h2>
            {shelter.address}, {shelter.state}
          </h2>
          <h2>
            <em>{shelter.description}</em>
          </h2>
          <p>Rating:</p>
          <h2>{shelter.avg_rating_shelter}</h2>
          {showReviews ? (
            <ShelterReviewsLead
              currentUser={currentUser}
              reviewsS={reviewsS}
              shelter={shelter}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
