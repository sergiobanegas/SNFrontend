import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentComponent from '../../../components/Dashboard/Comment';
import { toggleCommentReplies, likeComment, showNewCommentForm } from '../../../actions/dashboard/comments';

class CommentContainer extends Component {

  constructor(props) {
    super(props);
    this.onToggleCommentReplies = this.onToggleCommentReplies.bind(this);
    this.onCommentLiked = this.onCommentLiked.bind(this);
    this.onOpenForm = this.onOpenForm.bind(this);
  }

  onToggleCommentReplies() {
    const { dispatch, comment } = this.props;
    dispatch(toggleCommentReplies(comment._id));
  }

  onCommentLiked() {
    const { dispatch, comment } = this.props;
    dispatch(likeComment(comment._id));
  }

  onOpenForm() {
    const { dispatch, comment } = this.props;
    dispatch(showNewCommentForm(comment._id));
  }

  render () {
    const { comment, replies, active, likes, activeForm } = this.props;
    let loadingReplies = comment.replies.length > 0 && replies.length === 0;
    return (
      <CommentComponent
        comment={comment}
        replies={replies}
        likes={likes}
        active={active}
        onToggleCommentReplies={this.onToggleCommentReplies}
        onCommentLiked={this.onCommentLiked}
        loadingReplies={loadingReplies}
        activeForm={activeForm}
        onOpenForm={this.onOpenForm}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.dashboardReducer.commentsReducer.activeCommentsIds.indexOf(ownProps.comment._id) > -1,
    replies: state.dashboardReducer.commentsReducer[ownProps.comment._id] || [],
    likes: state.dashboardReducer.likesReducer[ownProps.comment._id] || ownProps.comment.likes,
    activeForm: state.dashboardReducer.commentsReducer.activeNewCommentParentId === ownProps.comment._id
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
)(CommentContainer);
