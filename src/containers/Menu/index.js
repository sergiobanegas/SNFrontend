import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authentication/authentication';
import MenuComponent from '../../components/Menu';

class MenuContainer extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render () {
    const {logged, activeItem} = this.props;
    return <MenuComponent logged={logged} onLogout={this.logout} activeItem={activeItem}/>;
  }

}

const mapStateToProps = state => {
  return {
    logged: state.authenticationReducer.logged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(MenuContainer);
