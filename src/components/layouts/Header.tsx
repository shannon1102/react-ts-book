import React, { Component } from 'react'
import SearchBox from '../SearchBox'
interface Props {

}

interface State {


}

export default class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='header'>
        <div className='header header__logo'>
          <img src='https://bphimmoi.net/wp-content/uploads/2021/08/logo.png' alt="Movie Logo" height="40">
          </img>
        </div>
        <div className='header header__search-box'>
          <SearchBox value=''></SearchBox>

        </div>

      </div>
    )
  }
}