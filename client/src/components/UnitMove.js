import React from "react";

export default function UnitMove({ currentUser }) {
  return (
    <div className='authForm'>
      <span style={{color: 'white'}}>
        As part of a migrant unit, you cannot request a move to a new location. In order
        to request a move, the unit Lead must disband the unit. Check your migrant units page for more details.
      </span>
    </div>
  );
}
