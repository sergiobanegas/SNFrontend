import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePostComments } from '../../actions/dashboard/comments';
import PostComponent from '../../components/Dashboard/PostComponent';

class PostContainer extends Component {

  constructor(props) {
    super(props);
    this.onTogglePostComments = this.onTogglePostComments.bind(this);
  }

  onTogglePostComments() {
    const { dispatch, post } = this.props;
    dispatch(togglePostComments(post._id));
  }

  render () {
    const { post, active, comments } = this.props;
    let loadingComments = post.comments.length > 0 && comments.length === 0;
    return (
      <PostComponent 
        post={post}
        active={active}
        comments={comments}
        onTogglePostComments={this.onTogglePostComments}
        loadingComments={loadingComments}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.dashboardReducer.commentsReducer.activePostsIds.indexOf(ownProps.post._id) > -1,
    comments: state.dashboardReducer.commentsReducer[ownProps.post._id] || [],
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
)(PostContainer);
