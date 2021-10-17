import React, { useState, useEffect } from 'react'
import ReviewM from './ReviewM';
import ReviewL from './ReviewL';

export default function Reviews({currentUser}) {
    const [leadReviews, setLeadReviews] = useState('')
    const [revealLead, setRevealLead] = useState(false)
    useEffect(() => {
        fetch(`/migrant_lead_reviews`)
          .then((r) => r.json())
          .then((r) => {
            setLeadReviews(r);
            console.log('salons are...', leadReviews)
          });
      }, []);
    return (
        <div>
            {currentUser.origin_country? <ReviewM currentUser={currentUser} leadReviews={leadReviews} setLeadReviews={setLeadReviews} /> 
            : <ReviewL currentUser={currentUser} />}
        </div>
    )
}
