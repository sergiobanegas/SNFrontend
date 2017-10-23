import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Button, Form, Segment, Message } from 'semantic-ui-react';
import FormInput from '../../../components/utils/FormInput';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'}
`;

let RegisterForm = props => {
  const { handleSubmit, isIncomplete, differentPasswords } = props;
  const passwordErrorText = "Passwords don't match";
  var genderOptions = [
    { key: 'male', value: 'male', text: 'Male' },
    { key: 'female', value: 'female', text: 'Female' }
  ];
  return (
    <div className="ui one column stackable center aligned page grid">
   <div className="column twelve wide">
    <Title>Register</Title>
    <Segment>
    <p>Fill the following fields in order to register a new user</p>
      <Form onSubmit={ handleSubmit }>
        <Form.Group widths='equal'>
          <FormInput name="email" type="email" label="Email"/>
          <FormInput name="name" type="text" label="Name"/>
        </Form.Group>
        <Form.Group widths='equal'>
          <FormInput name="password" type="password" label="Password"/>
          <FormInput name="passwordConfirmation" type="password" label="Password confirmation"/>
        </Form.Group>
        {differentPasswords && <Message negative><p>{passwordErrorText}</p></Message>}
        <Form.Group widths='equal'>
          <FormInput name="gender" type="select" options={genderOptions} label="Gender"/>
        </Form.Group>
        <Button primary type="submit" disabled={isIncomplete || differentPasswords}>Submit</Button>
      </Form>
    </Segment>
    </div>
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
