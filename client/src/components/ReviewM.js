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
                    </Button>
                    <br></br>
                    <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setShowReviewsL(!showReviewsL)}
                    >
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
        <br></br>
        <br></br>
        {commentBox ? <ReviewInput currentUser={currentUser} /> : <></>}
      </div>
      <br></br>
      <br></br>
      {showReviewsL ? (
        <LeadReviews currentUser={currentUser} reviews={reviews} />
      ) : (
        <></>
      )}
      <br></br>
      <br></br>
      <div className="cardsCenter">
        <Card sx={{ maxWidth: 1250 }}>
          <div className="card-container">
            <div class="float-layout">
              <div class="card-image">
                <img
                  src={currentUser.shelters[0].picture}
                  alt="shelter"
                  width="300px"
                  height="300px"
                />
                <div class="card">
                  <h1 class="card-title">Shelter Information:</h1>
                  <div class="card-desc" style={{ textAlign: "center" }}>
                    <h2>{currentUser.shelters[0].name}</h2>
                    <p class="card-titles">Description:</p>
                    <h2>{currentUser.shelters[0].description}</h2>
                    {/* <p>Review Score:</p><h2>{currentUser.shelters[0].avg_rating_shelter}</h2> */}
                    <Button
                      variant="contained"
                      color="secondary"
                      // onClick={() => setShowReviewsL(!showReviewsL)}
                      onClick={() => setCommentBoxS(!commentBoxS)}
                    >
                      Click to Write a Review for you Shelter ✍️
                    </Button>
                    <br></br>
                    <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setShowReviewsS(!showReviewsS)}>
                      {showReviewsS ? (
                        <>Click to Hide Your Shelter Reviews ❌</>
                      ) : (
                        <>Click to Read Your Shelter Reviews 📖</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        {commentBoxS ? <ReviewInputShelter currentUser={currentUser} /> : <></>}
        {showReviewsS ? (
          <ShelterReviews currentUser={currentUser} reviewsS={reviewsS} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
