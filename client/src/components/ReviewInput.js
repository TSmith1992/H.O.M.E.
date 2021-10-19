import React, { useState } from "react";
import { useHistory } from "react-router";

export default function ReviewInput({ currentUser }) {
  const history = useHistory();
  const [score, setScore] = useState();
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`migrant_lead_reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        migrant_id: currentUser.id,
        lead_id: currentUser.lead_info.id,
        score,
        review,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          history.push("/homepage");
          window.location.reload();
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors);
        });
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p></p>
        General Score:
        <p></p>
        <select
          onChange={(e) => setScore(e.target.value)}
          required
          placeholder="Rate from 1 to 5"
          className="form-control"
        >
          <option value="1">1: Horrible</option>
          <option value="2">2: Barely Passable</option>
          <option value="3">3: Average</option>
          <option value="4">4: Better Than Expected</option>
          <option value="5">5: Amazing!</option>
        </select>
        <p></p>
        <label htmlFor="review">Got anything to say? Let us know!</label>
        <p>
          <textarea
            type="review"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </p>
        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
