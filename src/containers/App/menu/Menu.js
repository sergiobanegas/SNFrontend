import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from '../../../actions/authentication/authentication';
import MainMenu from '../../../components/menu/MainMenu';

class Menu extends Component {
  logout(){
    const { dispatch } = this.props;
    dispatch(logout());
  }
  render () {
    const {logged} = this.props;
    const activeItem = "home";
    return (
        <MainMenu logged={logged} onLogout={this.logout.bind(this)} activeItem={activeItem}/>
    );
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu));
