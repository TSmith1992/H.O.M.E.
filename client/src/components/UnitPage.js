import React from 'react'
import UnitPageM from './UnitPageM'
import UnitPageL from './UnitPageL'

export default function UnitPage({currentUser}) {
    return (
        <div>
            {currentUser.origin_country? <UnitPageM currentUser={currentUser}/>
            :<UnitPageL currentUser={currentUser}/>}
        </div>
    )
}
