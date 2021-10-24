import React from "react";
import UnitPageInUnit from "./UnitPageInUnit";

export default function UnitPageTree({ currentUser, shelters}) {
  return (
    <div>
      {currentUser.unit_leader ? (
        <UnitPageInUnit
          currentUser={currentUser}
          shelters={shelters}
        />
      ) : (
        <div className="authForm" style={{ color: "white" }}>Please consult with your Unit leader about changes to your Unit.</div>
      )}
    </div>
  );
}
