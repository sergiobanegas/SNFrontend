import React from 'react';
import { Form } from 'semantic-ui-react';

let NewCommentComponent = ({onSubmit, onChange, isIncomplete, content}) => (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Field width={15}>
          <Form.Input
            type="content"
            name="content"
            placeholder="..."
            value={content}
            onChange={e => onChange(e.target.value)}
          />
        </Form.Field>
        <Form.Button primary circular icon="send" disabled={isIncomplete}/>
      </Form.Group>
    </Form>
);

export default NewCommentComponent;
