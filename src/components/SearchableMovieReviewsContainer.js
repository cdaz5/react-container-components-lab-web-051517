// Code SearchableMovieReviewsContainer Here

import React from 'react';
import MovieReviews from './MovieReviews';

// URL = `http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=657f3cc40c3e42d4885d6ba9a2e47ad8`

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target[0].value
    this.setState({
      searchTerm: queryTerm
    })
  }

  componentDidUpdate = () => {
    const queryString = this.state.searchTerm
    fetch(`http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${queryString}&api-key=657f3cc40c3e42d4885d6ba9a2e47ad8`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        movieResults: [...json.results]
      })
    }).catch(error => console.log(error))
  }

render() {
  return (
    <div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' />
        <button type='submit'>Search</button>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
  )
}

}
