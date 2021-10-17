import React from 'react'

export default function MoveL({currentUser}) {
    console.log('testing,', currentUser.migrant_shelters)
    return (
        <div>
            {currentUser.migrant_shelters.map(request =>{
                <div key={request.id}>
                    {request.id}
                </div>
            })}
        </div>
    )
}
