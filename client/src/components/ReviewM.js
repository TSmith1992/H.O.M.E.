import React from 'react'


export default function ReviewM({currentUser, leadReviews}) {

    return (
        <div>
            {/* class for lead reviews */}
            {leadReviews?
            <div>{leadReviews.filter(lreview => lreview.lead.id == currentUser.lead_info.id).map(review =>{
                <div key = {review.id}>
                    Helli

                </div>

            })}</div>:<>loading...</>}
        </div>
    )
}
