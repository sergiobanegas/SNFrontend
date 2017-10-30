import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Button, Form, Segment, Message, Grid } from 'semantic-ui-react';
import FormInput from '../../components/utils/FormInput';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  "goldenrod"}
`;

let SignUpComponent = ({handleSubmit, isIncomplete, differentPasswords, genderOptions, error}) => (
  <Grid centered>
    <Grid.Column computer={8} tablet={12} mobile={14} textAlign="center">
      <Title>Register</Title>
      <Segment>
        <p>Fill the following fields in order to register a new user</p>
        {error && <Message negative><p>{error}</p></Message>}
        <Form onSubmit={ handleSubmit }>
          <Form.Group widths="equal">
            <FormInput name="email" type="email" label="Email"/>
            <FormInput name="name" type="text" label="Name"/>
          </Form.Group>
          <Form.Group widths="equal">
            <FormInput name="password" type="password" label="Password"/>
            <FormInput name="passwordConfirmation" type="password" label="Password confirmation"/>
          </Form.Group>
          {differentPasswords && <Message negative><p>The password don't match</p></Message>}
          <Form.Group widths="equal">
            <FormInput name="gender" type="select" options={genderOptions} label="Gender"/>
          </Form.Group>
          <Button primary type="submit" disabled={isIncomplete || differentPasswords}>Submit</Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

SignUpComponent = reduxForm({
form: "sign-up-component"
})(SignUpComponent)

const selector = formValueSelector("sign-up-component");

SignUpComponent = connect(state => {
  const isIncomplete = !selector(state, "email") || !selector(state, "name") || !selector(state, "password") || !selector(state, "passwordConfirmation") || !selector(state, "gender");
  const differentPasswords = (selector(state, "password") && selector(state, "passwordConfirmation")) && selector(state, "password") !== selector(state, "passwordConfirmation");
  return {
    isIncomplete,
    differentPasswords
  }
})(SignUpComponent);

export default SignUpComponent;
