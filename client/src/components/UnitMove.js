import React from "react";

export default function UnitMove({ currentUser }) {
  return (
    <div>
      <span>
        As part of a Unit, you cannot request a move to a new location. In order
        to request a move, your Unit Lead must disband the Unit or you must
        otherwise be removed. Check your Units page for more details
      </span>
    </div>
  );
}
