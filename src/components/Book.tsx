import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Book extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='book'>
        <div className='book book__img'>
          <img src='https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'>
          </img>
        </div>

      </div>
    )
  }
}