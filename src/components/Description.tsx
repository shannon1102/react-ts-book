import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Description extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='description'>
                <div className='description description__item'>Title </div>
                <div className='description description__item'>Description</div>
                <div className='description description__item'>Rate</div>
            </div>
        )
    }
}