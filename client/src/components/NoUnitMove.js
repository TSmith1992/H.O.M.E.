import React, { useState, useEffect } from "react";
import ShelterMoveCard from "./ShelterMoveCard";

export default function NoUnitMove({ currentUser, shelters, setChosenMove }) {

  return (
    <div>
      {!shelters ? (
        <>Loading...</>
      ) : (
        shelters.filter(shelter => shelter.id !== currentUser.shelters[0].id).map((shelter) => (
          <ShelterMoveCard
            shelter={shelter}
            currentUser={currentUser}
            setChosenMove={setChosenMove}
          />
        ))
      )}
    </div>
  );
}
