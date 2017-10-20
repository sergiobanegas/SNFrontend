import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let LoginForm = props => {
  const { handleSubmit, onRegister, isIncomplete } = props;
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={ onRegister } disabled={isIncomplete}>Register</button>
    </div>
  )
}

LoginForm = reduxForm({
form: 'login-form'
})(LoginForm);

const selector = formValueSelector('login-form');

LoginForm = connect(state => {
  const isIncomplete = !selector(state, 'email') || !selector(state, 'password');
  return {
    isIncomplete
  }
})(LoginForm);

export default LoginForm;
