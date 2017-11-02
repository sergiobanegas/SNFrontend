import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, Segment, Divider, Icon, Grid, Message } from 'semantic-ui-react';
import FormInput from '../../components/utils/FormInput';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  "goldenrod"}
`;

let SignInComponent = ({ onSubmit, isIncomplete, error, onChange }) => (
  <Grid centered>
    <Grid.Column computer={8} tablet={12} mobile={14} textAlign="center">
      <Title>Login</Title>
      <Segment>
        <p>Fill the following fields in order to log in</p>
        {error && <Message negative><p>{error}</p></Message>}
        <Form onSubmit={onSubmit}>
         <Form.Group widths="equal">
           <Form.Field width={6}>
              <Form.Input
                type="email"
                name="email"
                label="Email"
                onChange={e => onChange(e.target.name, e.target.value)}
              />
            </Form.Field>
           </Form.Group>
           <Form.Group widths="equal">
            <Form.Field width={6}>
              <Form.Input
                type="password"
                name="password"
                onChange={e => onChange(e.target.name, e.target.value)}
                label="Password"
              />
            </Form.Field>
         </Form.Group>
         <Button primary type="submit" disabled={isIncomplete}>Submit</Button>
        </Form>
        <Divider section />
        <span> <Icon name="help"/>Don't have an account yet? click &nbsp;<Link to="/sign-up">here</Link> to register</span>
      </Segment>
    </Grid.Column>
 </Grid>
);

export default SignInComponent;
