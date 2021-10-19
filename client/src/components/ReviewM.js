import React, {useState} from "react";
import ReviewInput from "./ReviewInput"
import ReviewInputShelter from "./ReviewInputShelter";
import LeadReviews from "./LeadReviews"
import ShelterReviews from "./ShelterReviews"

export default function ReviewM({ currentUser, reviews, reviewsS}) {
    const [commentBox, setCommentBox] = useState(false)
    const [commentBoxS, setCommentBoxS] = useState(false)
    const [showReviewsL, setShowReviewsL] = useState(false)
    const [showReviewsS, setShowReviewsS] = useState(false)
  return (
    <div>
      <div>
        <h1>Lead Information:</h1>
        <img
          src={currentUser.lead_info.picture}
          alt="Lead"
          width="300px"
          height="300px"
        />
        <h2>{currentUser.lead_info.name}</h2>
        <p>Description:</p>
        <h2>{currentUser.lead_info.description}</h2>
        <button onClick={()=>setCommentBox(!commentBox)}>Click to Write a Review for you Shelter Lead</button>
        {commentBox? <ReviewInput currentUser={currentUser} />:<></>}
        <button onClick={()=>setShowReviewsL(!showReviewsL)}>Click to Read Your Shelter Lead Reviews</button>
        {showReviewsL? <LeadReviews currentUser={currentUser} reviews={reviews} />: <></>}
      </div>
      <div>
        <h1>Shelter Information:</h1>
        <img
          src={currentUser.shelters[0].picture}
          alt="shelter"
          width="300px"
          height="300px"
        />
        <h2>{currentUser.shelters[0].name}</h2>
        <p>Description:</p>
        <h2>{currentUser.shelters[0].description}</h2>
        {/* <p>Review Score:</p><h2>{currentUser.shelters[0].avg_rating_shelter}</h2> */}
        <button onClick={()=>setCommentBoxS(!commentBoxS)}>Click to Write a Review for you Shelter</button>
        {commentBoxS? <ReviewInputShelter currentUser={currentUser} />:<></>}
        <button onClick={()=>setShowReviewsS(!showReviewsS)}>Click to Read Your Shelter Lead Reviews</button>
        {showReviewsS? <ShelterReviews currentUser={currentUser} reviewsS={reviewsS} />: <></>}
      </div>
    </div>
  );
}
