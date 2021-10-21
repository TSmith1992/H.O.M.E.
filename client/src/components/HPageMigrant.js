import React from "react";
import { Link } from "react-router-dom";

export default function HPageMigrant({ currentUser }) {
  return (
    <div>
      <h1>Hi {currentUser.name}!</h1>
      <h3 className="Title">
        Find on this page some general information about you, your shelter, and shelter lead!
      </h3>
      <div>
        <img
          src={currentUser.picture}
          alt="Profile"
          width="300px"
          height="300px"
        />
        <p>About you:</p>
        <h3>{currentUser.description}</h3>
        <p>Country of Origin:</p>
        <h3>{currentUser.origin_country}</h3>
        <p>Birthdate:</p>
        <h3>{currentUser.birthdate}</h3>
        <p>Unit Code ID:</p>
        <h3>{currentUser.id}</h3>
        <h3>
          {currentUser.unit_member || currentUser.unit ? (
            <>You are currently part of a migrant unit </>
          ) : (
            <>
              You are currently <strong>NOT</strong> part of a migrant unit
            </>
          )}
        </h3>
        <button>
          <Link to="/unitedit" class="Links">
            Click hear to go to the migrant unit page
          </Link>
        </button>
      </div>
      <div>
        <h1>Shelter: {currentUser.shelters[0].name}</h1>
        <img
          src={currentUser.shelters[0].picture}
          alt="Shelter"
          width="300px"
          height="300px"
        />
        <p>Address:</p>
        <h2>{currentUser.shelters[0].address}</h2>
        <p>State:</p>
        <h2>{currentUser.shelters[0].state}</h2>
        <p>Shelter Score:</p>
        <h2>{currentUser.shelters[0].avg_rating_shelter}</h2>
        <button>
          <Link to="/reviews" class="Links">
            Read more about {currentUser.shelters[0].name}
          </Link>
        </button>
      </div>
      <div>
        <h1>Shelter Lead: {currentUser.lead_info.name}</h1>
        <img
          src={currentUser.lead_info.picture}
          alt="Shelter Lead"
          width="300px"
          height="300px"
        /><br></br>
        <button>
          <Link to="/reviews" class="Links">
            Read more about {currentUser.lead_info.name}
          </Link>
        </button>
      </div>
    </div>
  );
}
