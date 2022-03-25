import React, { Component } from 'react'
import BookList from '../components/BookList'
import Layout from '../components/layouts/Layout'

type Props = {}

type State = {}

export default class Home extends Component<Props, State> {
    state = {}

    render() {
        return (
            <BookList></BookList>

        )
    }
}