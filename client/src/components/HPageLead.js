import React from "react";
import { Link } from "react-router-dom";
import HPageShelter from "./HPageShelter";

export default function HPageLead({ currentUser }) {
  return (
    <div>
      <div>
        <h1>Hi {currentUser.name}!</h1>
        <h3 className="Title">
          Find on this page some general information about you and the shelters you manage.
        </h3>
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
        <button>
          <Link to="/reviews" class="Links">
            Read Your Reviews Here
          </Link>
        </button>
      </div>
      <br></br>
      <span>Read Below Some Quick Details of Your Shelters</span>
      <div>
        {currentUser.shelters.map((shelter) => (
          <HPageShelter key={shelter.name} shelter={shelter} />
        ))}
      </div>
    </div>
  );
}
