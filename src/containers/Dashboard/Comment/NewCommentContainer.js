import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCommentComponent from '../../../components/Dashboard/Comment/NewComment';
import { toggleCommentReplies, likeComment } from '../../../actions/dashboard/comments';

class NewCommentContainer extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { dispatch, comment } = this.props;
    //dispatch(toggleCommentReplies(comment._id));
  }

  render () {
    const { comment } = this.props;
    return (
      <NewCommentComponent
        parentId={comment._id}
        onSubmit={this.onSubmit}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.dashboardReducer.commentsReducer.activeCommentsIds.indexOf(ownProps.comment._id) > -1,
    replies: state.dashboardReducer.commentsReducer[ownProps.comment._id] || [],
    likes: state.dashboardReducer.likesReducer[ownProps.comment._id] || ownProps.comment.likes
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
