import React, { Component, ReactNode } from 'react'
import Content from './Content'
import Sider from './Sidebar'

type Props = {
    childNode: ReactNode
}

type State = {}

export default class Body extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='body'>
                <Sider>

                </Sider>
                <Content childNode= {this.props.childNode}>

                </Content>
            </div>
        )
    }
}