import React from "react";
import LeaderMoveShelter from "./LeaderMoveShelter";

export default function LeaderMove({ currentUser, shelters }) {
  return (
    <div>
        <p>As a Shelter Lead, you may move migrants to different shelters you run in order to ease capacity for certain shelters.</p>
      {currentUser.shelters.map((shelter) => (
        <LeaderMoveShelter key={shelter.name} shelter={shelter} currentUser={currentUser}/>
      ))}
    </div>
  );
}
