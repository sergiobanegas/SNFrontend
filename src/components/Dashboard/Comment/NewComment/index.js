import React from 'react';
import { Form, Segment } from 'semantic-ui-react';

let NewCommentComponent = ({onSubmit, onChange, isIncomplete, content}) => (
  <Segment>
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Field width={15}>
          <Form.Input
            type="content"
            name="content"
            label="Content"
            value={content}
            onChange={e => onChange(e.target.value)}
          />
        </Form.Field>
        <Form.Button primary circular icon="send" disabled={isIncomplete}/>
      </Form.Group>
    </Form>
  </Segment>
);

export default NewCommentComponent;
