import React, { Component } from 'react'

interface SearchBoxProps {
    value: string
}

interface SearchBoxState {
    value: string
}

export default class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
    state: SearchBoxState = {
        value: ''
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ value: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <input
                    className='search-form'
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder='Type to search'
                >


                </input>

{/* 
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button> */}
            </div>



        )
    }
}