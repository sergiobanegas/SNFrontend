import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RegisterForm = props => {
  const { handleSubmit } = props;
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

RegisterForm = reduxForm({
form: 'register-form'
})(RegisterForm)

export default RegisterForm;
