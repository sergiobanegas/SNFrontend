import React, {Component} from 'react';
import MenuContainer from './Menu';
import DashboardContainer from './Dashboard';

export default class App extends Component {
  render () {
    return (
      <div>
        <MenuContainer/>
        <DashboardContainer/>
      </div>
    )
  }
}
