import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from '../../../actions/authentication/authentication';

class Logout extends Component {
  logout(){
    const { dispatch } = this.props;
    localStorage.removeItem("user_token");
    dispatch(logout());
  }
  render () {
    const {logged} = this.props;
    return logged ? <button onClick={this.logout.bind(this)}>Logout</button> : "";
  }
  componentWillReceiveProps(){
    console.log(this.props);
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
)(Logout));
