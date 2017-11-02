import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCommentComponent from '../../../../components/Dashboard/Comment/NewComment';
import { newComment, setNewCommentContent, updateFormInput } from '../../../../actions/dashboard/comments';

class NewCommentContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps() {
    const { dispatch, shouldUpdate } = this.props;
    if (shouldUpdate) {
      debugger;
      dispatch(updateFormInput());
      this.forceUpdate();
    }
  }

  onSubmit() {
    const { dispatch, parentId, content } = this.props;
    dispatch(newComment(content, null, parentId));
  }

  onChange(content) {
    const { dispatch } = this.props;
    dispatch(setNewCommentContent(content));
  }

  render () {
    const { isIncomplete } = this.props;
    return (
      <NewCommentComponent onSubmit={this.onSubmit} onChange={this.onChange} isIncomplete={isIncomplete}/>
    );
  }

}

const mapStateToProps = state => {
  return {
    content: state.dashboardReducer.commentsReducer.newCommentContent,
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
