import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import NewCommentComponent from '../../../../components/Dashboard/Comment/NewComment';
import { newComment } from '../../../../actions/dashboard/comments';

class NewCommentContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { dispatch, parentId } = this.props;
    dispatch(newComment(values.content, null, parentId));
    dispatch(reset('new-comment-component'));
  }

  render () {
    return (
      <NewCommentComponent onSubmit={this.onSubmit}/>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapDispatchToProps
)(NewCommentContainer);
