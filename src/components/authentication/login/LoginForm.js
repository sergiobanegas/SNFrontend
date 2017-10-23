import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { reduxForm, formValueSelector } from 'redux-form';
import { Button, Form, Segment, Divider, Icon } from 'semantic-ui-react';
import FormInput from '../../../components/utils/FormInput';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'}
`;

let LoginForm = props => {
  const { handleSubmit, isIncomplete } = props;
  return (
    <div className="ui one column stackable center aligned page grid">
   <div className="column twelve wide">
    <Title>Login</Title>
    <Segment>
      <p>Fill the following fields in order to log in</p>
      <Form onSubmit={handleSubmit}>
       <Form.Group widths='equal'>
         <FormInput name="email" type="text" label="Email"/>
         </Form.Group>
         <Form.Group widths='equal'>
         <FormInput name="password" type="text" label="Password"/>
       </Form.Group>
       <Button type="submit" disabled={isIncomplete}>Submit</Button>
      </Form>
      <Divider section />
      <span> <Icon name='help' />Don't have an account yet? click &nbsp;<Link to="/register">here</Link> to register</span>
    </Segment>
    </div>
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
