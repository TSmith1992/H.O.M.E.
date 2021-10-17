import React from 'react'
import MoveM from './MoveM'
import MoveL from './MoveL'

export default function Move({currentUser, shelters}) {
    
    return (
        <div>
            {currentUser.lead_info? <MoveM currentUser={currentUser} shelters={shelters}/> 
            : <MoveL currentUser={currentUser} />}
        
        </div>
    )
}
