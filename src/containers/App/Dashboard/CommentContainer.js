import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentComponent from '../../../components/Dashboard/CommentComponent';
import {toggleCommentReplies, likeComment} from '../../../actions/dashboard/comments';

class CommentContainer extends Component {

  constructor(props) {
    super(props);
    this.onToggleCommentReplies = this.onToggleCommentReplies.bind(this);
  }

  onToggleCommentReplies() {
    const { dispatch, comment } = this.props;
    dispatch(toggleCommentReplies(comment._id));
  }

  onCommentLiked() {
    const { dispatch, comment } = this.props;
    dispatch(likeComment(comment._id));
  }

  render () {
    const { comment, replies, active, likes } = this.props;
    return (
      <CommentComponent comment={comment} replies={replies} likes={likes} active={active} onToggleCommentReplies={this.onToggleCommentReplies} onCommentLiked={this.onCommentLiked.bind(this)}/>
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
)(CommentContainer);
