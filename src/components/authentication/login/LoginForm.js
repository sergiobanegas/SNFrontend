import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit, onRegister } = props;
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
      <button onClick={ onRegister }>Register</button>
    </div>
  )
}

LoginForm = reduxForm({
form: 'login-form'
})(LoginForm)

export default LoginForm;
