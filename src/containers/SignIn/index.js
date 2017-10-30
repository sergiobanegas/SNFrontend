import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInComponent from '../../components/SignIn';
import { signIn } from '../../actions/authentication';

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { dispatch } = this.props;
    dispatch(signIn(values.email, values.password));
  }

   render () {
     const {error} = this.props;
     return (
         <SignInComponent onSubmit={this.onSubmit} error={error}/>
     )
   }
}

const mapStateToProps = state => {
  return {
    error : state.authenticationReducer.error
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
)(SignInContainer));
