import React, { Component } from 'react'
import Book from '../components/Book'
import Description from '../components/Description'

type Props = {}

type State = {}

export default class Detail extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='detail'>
                <div className='detail detail__book'> 
                    <Book>

                    </Book>

                </div>
                <div className='detail detail__description'>

                    <Description>


                    </Description>



                </div>

            </div>
        )
    }
}