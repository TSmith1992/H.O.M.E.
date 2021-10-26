import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

export default function ReviewInputShelter({ currentUser }) {
  const history = useHistory();
  const [score, setScore] = useState(1);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`migrant_shelter_reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        migrant_id: currentUser.id,
        shelter_id: currentUser.shelters[0].id,
        score,
        review,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          alert('Thank you. Your comment has been posted.')
          // history.push("/homepage");
          window.location.reload();
        });
      } else {
        res.json().then((errors) => {
          // console.log(errors);
          setErrors(errors);
        });
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}
              className="authForm"
              style={{
                color: "white",
                textShadow:
                  "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
              }}>
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
        <label htmlFor="review">Write your thoughts below:</label>
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
                  <li style={{ color: "red" }}>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <Button
          variant="contained"
          className="login"
          type="submit"
          color="secondary">Submit Review ✅</Button>
      </form>
    </div>
  );
}
