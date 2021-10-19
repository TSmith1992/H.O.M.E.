import React, {useState} from "react";
import ReviewInput from "./ReviewInput"

export default function ReviewM({ currentUser}) {
    const [commentBox, setCommentBox] = useState(false)
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
        <p>Review Score:</p><h2>{currentUser.lead_info.review_score}</h2>
        <button onClick={()=>setCommentBox(!commentBox)}>Write a Review Here:</button>
        {commentBox? <ReviewInput currentUser={currentUser} />:<></>}
      </div>
    </div>
  );
}
