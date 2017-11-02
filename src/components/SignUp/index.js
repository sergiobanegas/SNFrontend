import React from 'react';
import { Button, Form, Segment, Message, Grid, Select } from 'semantic-ui-react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  "goldenrod"}
`;

let SignUpComponent = ({onSubmit, onChange, isIncomplete, genderOptions, error}) => (
  <Grid centered>
    <Grid.Column computer={8} tablet={12} mobile={14} textAlign="center">
      <Title>Register</Title>
      <Segment>
        <p>Fill the following fields in order to register a new user</p>
        {error && <Message negative><p>{error}</p></Message>}
        <Form onSubmit={ onSubmit }>
          <Form.Group widths="equal">
            <Form.Field width={6}>
              <Form.Input
                type="email"
                name="email"
                label="Email"
                onChange={e => onChange(e.target.name, e.target.value)}
              />
           </Form.Field>
           <Form.Field width={6}>
             <Form.Input
               type="text"
               name="name"
               label="Name"
               onChange={e => onChange(e.target.name, e.target.value)}
             />
          </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field width={6}>
            <Form.Input
              type="password"
              name="password"
              label="Password"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
         </Form.Field>
         <Form.Field width={6}>
           <Form.Input
             type="password"
             name="passwordConfirmation"
             label="Password confirmation"
             onChange={e => onChange(e.target.name, e.target.value)}
           />
        </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field>
             <Select
               type="select"
               name="gender"
               label="Gender"
               options={genderOptions}
               onChange={(e, response) => onChange(response.name, response.value)}
             />
           </Form.Field>
          </Form.Group>
          <Button primary type="submit" disabled={isIncomplete}>Submit</Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default SignUpComponent;
