import React from 'react'
import NoUnitMove from './NoUnitMove'
import UnitMove from './UnitMove'

export default function MoveM({currentUser, shelters}) {
    return (
        <div>
            {currentUser.unit_member!=true?<NoUnitMove shelters={shelters} currentUser={currentUser} />
            :<UnitMove currentUser={currentUser} />}
        </div>
    )
}
