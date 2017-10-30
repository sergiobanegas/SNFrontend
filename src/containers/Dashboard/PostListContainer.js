import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/dashboard/posts';
import PostListComponent from '../../components/Dashboard/PostListComponent';

class PostListContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }

  render () {
    const { posts } = this.props;
    return (
      <PostListComponent posts={posts}/>
    );
  }

}

const mapStateToProps = state => {
  return {
    posts: state.dashboardReducer.postsReducer.posts
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
)(PostListContainer);
