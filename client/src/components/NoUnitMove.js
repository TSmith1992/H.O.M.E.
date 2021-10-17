import React, { useState, useEffect } from 'react'
import ShelterMoveCard from './ShelterMoveCard'

export default function NoUnitMove({currentUser, shelters}) {
    console.log(shelters)

    return (
        <div>
            {!shelters? <>Loading...</>
            :shelters.map(shelter => (
            <ShelterMoveCard shelter={shelter} />))}
        </div>
    )
}
