import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GENDER_OPTIONS } from '../../types/authentication';
import SignUpComponent from '../../components/SignUp';
import { signUp, setFormFieldValue } from '../../actions/authentication';

class SignUpContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(field, value) {
    const { dispatch, email, password, passwordConfirmation, name, gender } = this.props;
    let completed = email && password && passwordConfirmation && name && gender;
    dispatch(setFormFieldValue(field, value, completed));
  }

  onSubmit() {
    const { dispatch, email, password, passwordConfirmation, gender, name } = this.props;
    let fields = {
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      name: name,
      gender: gender
    };
    dispatch(signUp(fields));
  }

  render () {
    const {error, isIncomplete} = this.props;
    return (
      <SignUpComponent
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        genderOptions={GENDER_OPTIONS}
        error={error}
        isIncomplete={isIncomplete}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.authenticationReducer["email"],
    password: state.authenticationReducer["password"],
    passwordConfirmation: state.authenticationReducer["passwordConfirmation"],
    name: state.authenticationReducer["name"],
    gender: state.authenticationReducer["gender"],
    isIncomplete: state.authenticationReducer.isIncomplete,
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
