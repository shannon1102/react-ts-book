import React, { Component, ReactNode } from 'react'
import Book from '../Book'
import BookList from '../BookList'
import Body from './Body'
import Content from './Content'
import Container from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  childNode: ReactNode
}

type State = {}

export default class Layout extends Component<Props, State> {
  state = {}

  render() {
    return (
      <React.Fragment>
        <Header />
        <Body childNode={this.props.childNode}></Body>
        <Footer />

      </React.Fragment>
    )
  }
}