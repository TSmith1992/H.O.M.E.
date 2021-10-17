import React from 'react'

export default function ShelterMoveCard({shelter}) {
    return (
        <div key={shelter.id}>
          <h1>{shelter.name}</h1>
          <img
            src={shelter.picture}
            alt="shelter"
            width="300px"
            height="300px"
          />
          <p>Address:</p>
          <h2>{shelter.address}, {shelter.state}</h2>
          <h2><em>{shelter.description}</em></h2>
          <p>Rating:</p>
          <h2>{shelter.avg_rating_shelter}</h2>
          <p>Occupancy:</p>
          <h2>{shelter.current_occupancy}/{shelter.capacity}</h2>
          <button>Click here to choose this place to moce</button>
        </div>
    )
}
