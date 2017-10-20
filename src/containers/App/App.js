import React, {Component} from 'react';
import Logout from '../../components/authentication/logout/Logout';

export default class App extends Component {
  logout(){
    localStorage.removeItem("user_token");
  }
  render () {
    return (
      <div>
        <Logout/>
      </div>
    )
  }
}
