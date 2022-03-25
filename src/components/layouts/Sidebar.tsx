import React, { Component } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

type State = {}

export default class Sidebar extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='sidebar'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><h1>Home</h1></Link>
                        </li>
                        <li>
                            <Link to="/books"><h1>First Product</h1></Link>
                        </li>
                        <li>
                            <Link to="/books/1"><h1>Second Product</h1></Link>
                        </li>
                        <li>
                            <Link to="/books/1"><h1>Second Product</h1></Link>
                        </li>
                        <li>
                            <Link to="/books/1"><h1>Second Product</h1></Link>
                        </li>
                        <li>
                            <Link to="/books/1"><h1>Second Product</h1></Link>
                        </li>
                   
                    </ul>
                </nav>
            </div>
        )
    }
}