import React, { Component } from 'react'
import Book from './Book'

type Props = {}

type State = {}

export default  class BookList extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='books'>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </div>
    )
  }
}
