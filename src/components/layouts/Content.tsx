import React, { Component } from 'react'
import BookList from '../BookList'

type Props = {
  childNode: React.ReactNode
}

type State = {}

export default class Content extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='content'>{this.props.childNode}</div>
    )
  }

}