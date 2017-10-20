import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let RegisterForm = props => {
  const { handleSubmit, isIncomplete, differentPasswords } = props;
  const passwordErrorText = "Passwords don't match";
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        {differentPasswords && <div>{passwordErrorText}</div>}
        <div>
          <label htmlFor="passwordConfirmation">Password confirmation</label>
          <Field name="passwordConfirmation" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <Field name="gender" component="select">
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </div>
        <button type="submit" disabled={isIncomplete || differentPasswords}>Submit</button>
      </form>
    </div>
  )
}

RegisterForm = reduxForm({
form: 'register-form'
})(RegisterForm)

const selector = formValueSelector('register-form');

RegisterForm = connect(state => {
  const isIncomplete = !selector(state, 'email') || !selector(state, 'name') || !selector(state, 'password') || !selector(state, 'passwordConfirmation') || !selector(state, 'gender');
  const differentPasswords = (selector(state, 'password') && selector(state, 'passwordConfirmation')) && selector(state, 'password') !== selector(state, 'passwordConfirmation');
  return {
    isIncomplete,
    differentPasswords
  }
})(RegisterForm);

export default RegisterForm;
