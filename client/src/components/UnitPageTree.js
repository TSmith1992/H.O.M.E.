import React from "react";
import UnitPageInUnit from "./UnitPageInUnit";

export default function UnitPageTree({ currentUser, personA, personB, personC}) {
  return (
    <div>
      {currentUser.unit_leader ? (
        <UnitPageInUnit
          personA={personA}
          personB={personB}
          personC={personC}
          currentUser={currentUser}
        />
      ) : (
        <>Please consult with your Unit leader about changes to your Unit</>
      )}
    </div>
  );
}
