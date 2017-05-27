import React, {Component} from 'react'
import {Link} from 'react-router'
import Header from '../Header/Header.jsx'
import AppRouter from '../AppRouter/AppRouter.jsx'


export default class App extends Component {
  constructor() {
    super();
    this.state = {isAuthorized: true}
  }

  render() {
    return (
      <div>
        <Header />
        <AppRouter />
      </div>
    )
  }
}