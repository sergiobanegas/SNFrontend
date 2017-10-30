import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form, Segment } from 'semantic-ui-react';
import FormInput from '../../../../components/utils/FormInput';

let NewCommentComponent = ({ handleSubmit, isIncomplete }) => (
  <Segment>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <FormInput name="content" type="text" label="..." width="15"/>
        <Form.Button primary circular icon="send" disabled={isIncomplete}/>
      </Form.Group>
    </Form>
  </Segment>
);

NewCommentComponent = reduxForm({
  form: "new-comment-component"
})(NewCommentComponent);

const selector = formValueSelector("new-comment-component");

NewCommentComponent = connect(state => {
  const isIncomplete = !selector(state, "content");
  return {
    isIncomplete
  }
})(NewCommentComponent);

export default NewCommentComponent;