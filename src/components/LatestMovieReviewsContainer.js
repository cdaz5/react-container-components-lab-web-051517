import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = '657f3cc40c3e42d4885d6ba9a2e47ad8';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  handleLatest = (e) => {
    console.log(e)
    e.preventDefault()
    fetch('http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=657f3cc40c3e42d4885d6ba9a2e47ad8')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        latestMovieReviews: [...json.results, ...this.state.reviews]
      })
    })
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <button type="button" onClick={this.handleLatest}>Latest Reviews</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
