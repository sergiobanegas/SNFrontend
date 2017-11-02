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

  onSubmit() {
    const { dispatch, email, password } = this.props;
    dispatch(signIn(email, password));
  }

  onChange(field, value) {
    const { dispatch, email, password } = this.props;
    let completed = email && password;
    dispatch(setFormFieldValue(field, value, completed));
  }

   render () {
     const {error, isIncomplete} = this.props;
     return (
         <SignInComponent onSubmit={this.onSubmit} onChange={this.onChange} error={error} isIncomplete={isIncomplete}/>
     )
   }
}

const mapStateToProps = state => {
  return {
    email: state.authenticationReducer["email"],
    password: state.authenticationReducer["password"],
    isIncomplete: state.authenticationReducer.isIncomplete,
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
