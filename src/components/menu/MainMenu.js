import React, {Component} from 'react';
import {logout} from '../../actions/authentication/authentication';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

export default class MainMenu extends Component {
  logout(){
    const { dispatch } = this.props;
    localStorage.removeItem("user_token");
    dispatch(logout());
  }
  render () {
    const {onLogout} = this.props;
    const activeItem = "home";
    return (
      <Menu className="ui blue inverted">
        <Menu.Item name="home" active={activeItem === "home"}/>
        <Menu.Item name="messages" active={activeItem === "messages"}/>
        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item onClick={onLogout}>
            <b>Logout</b>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

}
