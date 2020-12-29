import React, { Component } from 'react'
import Header from './Header'
import Taskbar from './Taskbar'
import Tasklist from './Tasklist'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Taskbar />
        <Tasklist />
      </div>
    )
  }
}

