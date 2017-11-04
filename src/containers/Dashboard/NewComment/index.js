import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCommentComponent from '../../../components/Dashboard/NewComment';
import { newComment, setNewCommentContent } from '../../../actions/dashboard/comments';

class NewCommentContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    const { dispatch, parentId, parentType, content } = this.props;
    dispatch(newComment(content, parentId, parentType ));
  }

  onChange(content) {
    const { dispatch } = this.props;
    dispatch(setNewCommentContent(content));
  }

  render () {
    const { isIncomplete, submitted, content } = this.props;
    return (
      <NewCommentComponent
        content={content}
        submitted={submitted}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        isIncomplete={isIncomplete}
      />
    );
  }

}

const mapStateToProps = state => {
  return {
    content: state.dashboardReducer.commentsReducer.newCommentContent || "",
    isIncomplete: state.dashboardReducer.commentsReducer.isNewCommentFormIncomplete,
    shouldUpdate: state.dashboardReducer.commentsReducer.newCommentFormShouldUpdate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentContainer);
