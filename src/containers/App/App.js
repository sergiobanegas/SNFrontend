import React, {Component} from 'react';
import Menu from './menu/Menu';
import DashBoard from './DashBoard/DashBoard';

export default class App extends Component {
  render () {
    return (
      <div>
        <Menu/>
        <DashBoard/>
      </div>
    )
  }
}
