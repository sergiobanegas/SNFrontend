import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { reduxForm, formValueSelector } from 'redux-form';
import { Button, Form, Segment, Divider, Icon, Grid, Message } from 'semantic-ui-react';
import FormInput from '../../components/utils/FormInput';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  "goldenrod"}
`;

let SignInComponent = ({ handleSubmit, isIncomplete, error }) => (
  <Grid centered>
    <Grid.Column computer={8} tablet={12} mobile={14} textAlign="center">
      <Title>Login</Title>
      <Segment>
        <p>Fill the following fields in order to log in</p>
        {error && <Message negative><p>{error}</p></Message>}
        <Form onSubmit={handleSubmit}>
         <Form.Group widths="equal">
           <FormInput name="email" type="text" label="Email"/>
           </Form.Group>
           <Form.Group widths="equal">
           <FormInput name="password" type="password" label="Password"/>
         </Form.Group>
         <Button primary type="submit" disabled={isIncomplete}>Submit</Button>
        </Form>
        <Divider section />
        <span> <Icon name="help"/>Don't have an account yet? click &nbsp;<Link to="/sign-up">here</Link> to register</span>
      </Segment>
    </Grid.Column>
 </Grid>
);

SignInComponent = reduxForm({
  form: "sign-in-component"
})(SignInComponent);

const selector = formValueSelector("sign-in-component");

SignInComponent = connect(state => {
  const isIncomplete = !selector(state, "email") || !selector(state, "password");
  return {
    isIncomplete
  }
})(SignInComponent);

export default SignInComponent;
