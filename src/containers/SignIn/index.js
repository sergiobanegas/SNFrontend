import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInComponent from '../../components/SignIn';
import { signIn, setFormFieldValue } from '../../actions/authentication';

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(values) {
    const { dispatch, email, password } = this.props;
    dispatch(signIn(email, password));
  }

  onChange(field, value) {
    const { dispatch } = this.props;
    dispatch(setFormFieldValue(field, value));
  }

   render () {
     const {error} = this.props;
     let isIncomplete = false;
     return (
         <SignInComponent onSubmit={this.onSubmit} onChange={this.onChange} error={error} isIncomplete={isIncomplete}/>
     )
   }
}

const mapStateToProps = state => {
  return {
    email: state.authenticationReducer["email"],
    password: state.authenticationReducer["password"],
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
