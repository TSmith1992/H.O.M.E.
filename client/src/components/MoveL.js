import React from 'react'
import RequestCard from './RequestCard'

export default function MoveL({currentUser}) {
    return (
        <div>
            {currentUser.migrant_shelters.filter(shelter => shelter.active !== true).map(request => <RequestCard request={request} currentUser={currentUser} />)}
        </div>
    )
}
