import React, { Component } from 'react';
import { logout } from '../../actions/authentication/authentication';
import { Dropdown, Menu } from 'semantic-ui-react';
import { ACTIVE_ITEMS } from '../../types/menu';

export default class MenuComponent extends Component {

  render () {
    const {onLogout, activeItem} = this.props;
    return (
      <Menu inverted color="blue">
        <Menu.Item name="home" active={activeItem === ACTIVE_ITEMS.HOME}/>
        <Menu.Item name="messages" active={activeItem === ACTIVE_ITEMS.MESSAGES}/>
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
