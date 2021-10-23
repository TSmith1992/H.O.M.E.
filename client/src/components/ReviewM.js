import React, { useState } from "react";
import ReviewInput from "./ReviewInput";
import ReviewInputShelter from "./ReviewInputShelter";
import LeadReviews from "./LeadReviews";
import ShelterReviews from "./ShelterReviews";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function ReviewM({ currentUser, reviews, reviewsS }) {
  const [commentBox, setCommentBox] = useState(false);
  const [commentBoxS, setCommentBoxS] = useState(false);
  const [showReviewsL, setShowReviewsL] = useState(false);
  const [showReviewsS, setShowReviewsS] = useState(false);
  return (
    <div>
      <div className="cardsCenter">
        <Card sx={{ maxWidth: 1250 }}>
          <div className="card-container">
            <div class="float-layout">
              <div class="card-image">
                <img
                  src={currentUser.lead_info.picture}
                  alt="Lead"
                  width="300px"
                  height="300px"
                />
                <div class="card">
                  <h1 class="card-title"> Your Shelter Lead Information:</h1>
                  <div class="card-desc" style={{ textAlign: "center" }}>
                    <h2>{currentUser.lead_info.name}</h2>
                    <p class="card-titles">Description:</p>
                    <h2>{currentUser.lead_info.description}</h2>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setCommentBox(!commentBox)}
                    >
                      Click to Write a Review for you Shelter Lead ✍️
                    </Button><br></br><br></br>
                                        <Button
                      variant="contained"
                      color="primary" onClick={() => setShowReviewsL(!showReviewsL)}>
                      {showReviewsL ? (
                        <>Click to Hide Your Shelter Lead Reviews ❌</>
                      ) : (
                        <>Click to Read Your Shelter Lead Reviews 📖</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        {commentBox ? <ReviewInput currentUser={currentUser} /> : <></>}
      </div>
      {showReviewsL ? (
        <LeadReviews currentUser={currentUser} reviews={reviews} />
      ) : (
        <></>
      )}
      <div className="cardsCenter">
        <Card sx={{ maxWidth: 1250 }}>
        <img
          src={currentUser.shelters[0].picture}
          alt="shelter"
          width="300px"
          height="300px"
          />
          <h1>Shelter Information:</h1>
        <h2>{currentUser.shelters[0].name}</h2>
        <p>Description:</p>
        <h2>{currentUser.shelters[0].description}</h2>
        {/* <p>Review Score:</p><h2>{currentUser.shelters[0].avg_rating_shelter}</h2> */}
        <button onClick={() => setCommentBoxS(!commentBoxS)}>
          Click to Write a Review for you Shelter
        </button>
        {commentBoxS ? <ReviewInputShelter currentUser={currentUser} /> : <></>}
        <button onClick={() => setShowReviewsS(!showReviewsS)}>
          {showReviewsS ? (
            <>Click to Hide Your Shelter Reviews</>
          ) : (
            <>Click to Read Your Shelter Reviews</>
          )}
        </button>
        {showReviewsS ? (
          <ShelterReviews currentUser={currentUser} reviewsS={reviewsS} />
        ) : (
          <></>
        )}
        </Card>
      </div>
    </div>
  );
}
