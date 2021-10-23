import React, { useState } from "react";
import ShelterReviewsLead from "./ShelterReviewsLead";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function ReviewL({ currentUser, reviewsS }) {
  const [showReviews, setShowReviews] = useState(false);
  const [showMyReviews, setShowMyReviews] = useState(false);
  return (
    <div>
      <div className="cardsCenter">
        <Card sx={{ maxWidth: 1000 }}>
          <div className="card-container">
            <div class="float-layout">
              <div class="card-image">
                <img
                  src={currentUser.picture}
                  alt="Profile"
                  width="300px"
                  height="300px"
                />
                <div class="card">
                  <div class="card-title">{currentUser.name}</div>
                  <div class="card-desc" style={{ textAlign: "center" }}>
                    <p class="card-titles">About you:</p>
                    <h3>{currentUser.description}</h3>
                    <p class="card-titles">Average Rating:</p>
                    <h3>{currentUser.avg_rating_lead}</h3>
                    <br></br>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setShowMyReviews(!showMyReviews)}
                    >
                      {showMyReviews ? (
                        <>Click here to hide your reviews ❌</>
                      ) : (
                        <>Click here to see your reviews 📖</>
                      )}
                    </Button>
                    <br></br>
                    <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setShowReviews(!showReviews)}
                    >
                      {showReviews ? (
                        <>Click here to hide shelter reviews ❌</>
                      ) : (
                        <>Click to read shelter reviews 🏠</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {showMyReviews ? (
        <h1
          style={{
            textAlign: "center",
            textShadow:
              "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
          }}
        >
          Your Reviews:
        </h1>
      ) : (
        <></>
      )}
      {showMyReviews ? (
        <div className="container1">
          {currentUser.migrant_lead_reviews.map((lReview) => (
            <div key={lReview.id} class="saloncard">
              <div>
                <div>
                  <div>
                    <h3>ANONYMOUS:</h3>
                    <strong>Review Score: </strong>
                    {lReview.score}
                    <br></br>
                    <strong>Review: </strong>
                    {lReview.review}
                  </div>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {currentUser.shelters.map((shelter) => (
          <div
            key={shelter.id}
            className="authForm"
            style={{
              color: "yellow",
              border: "2px solid yellow",
              width: "50em",
              marginLeft: "auto",
              marginRight: "auto",
              order: 5,
            }}
          >
            <Card
              sx={{ maxWidth: 900 }}
              style={{
                backgroundColor: "palevioletred",
                maxHeight: "auto",
                borderRadius: "25px",
              }}
            >
              <div
                className="card-container"
                style={{ textAlign: "center", border: "none" }}
              >
                <div class="float-layout">
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
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
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
