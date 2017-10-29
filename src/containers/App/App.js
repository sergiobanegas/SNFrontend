import React, {Component} from 'react';
import Menu from './menu/Menu';
import Dashboard from './Dashboard';

export default class App extends Component {
  render () {
    return (
      <div>
        <Menu/>
        <Dashboard/>
      </div>
    )
  }
}
