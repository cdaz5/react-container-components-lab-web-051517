// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
        {reviews.map((review,index) =>
      <div className='review' key={index}>
        <h1>{review.display_title}</h1>
        <p>Rated: {review.mpaa_rating}</p>
        <p>Summary: {review.summary_short}</p>
        <p>Critics Pick: {review.critics_pick}</p>
      </div>
        )
        }
    </div>
  )
}

MovieReviews.defaultProps = {
 reviews: []
}

export default MovieReviews;
