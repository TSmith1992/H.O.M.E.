import React, { useState, useEffect } from "react";
import ReviewM from "./ReviewM";
import ReviewL from "./ReviewL";

export default function Reviews({ currentUser }) {
  const [reviews, setReviews] = useState([]);
  const [reviewsS, setReviewsS] = useState([]);
  useEffect(() => {
    fetch("/migrant_lead_reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
      });
    fetch("/migrant_shelter_reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviewsS(data);
      });
  }, []);
  return (
    <div>
      {currentUser.origin_country ? (
        <ReviewM
          currentUser={currentUser}
          reviews={reviews}
          reviewsS={reviewsS}
        />
      ) : (
        <ReviewL currentUser={currentUser} reviewsS={reviewsS} />
      )}
    </div>
  );
}
