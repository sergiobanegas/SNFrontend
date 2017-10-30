import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GENDER_OPTIONS } from '../../types/authentication';
import SignUpComponent from '../../components/SignUp';
import { signUp } from '../../actions/authentication';

class SignUpContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { dispatch } = this.props;
    dispatch(signUp(values));
  }

  render () {
    const {error} = this.props;
    return <SignUpComponent onSubmit={this.onSubmit} genderOptions={GENDER_OPTIONS} error={error}/>
  }
}

const mapStateToProps = state => {
  return {
    error : state.authenticationReducer.error,
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
)(SignUpContainer));
