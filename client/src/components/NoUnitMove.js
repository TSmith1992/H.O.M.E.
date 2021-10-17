import React, { useState, useEffect } from 'react'
import ShelterMoveCard from './ShelterMoveCard'

export default function NoUnitMove({currentUser, shelters, setChosenMove}) {
    console.log(shelters)

    return (
        <div>
            {!shelters? <>Loading...</>
            :shelters.map(shelter => (
            <ShelterMoveCard shelter={shelter} currentUser={currentUser} setChosenMove={setChosenMove} />))}
        </div>
    )
}
