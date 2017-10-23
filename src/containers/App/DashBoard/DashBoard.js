import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getDashBoardPosts} from '../../../actions/posts/posts';
import DashBoardComponent from '../../../components/DashBoard/DashBoardComponent';

class DashBoard extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getDashBoardPosts());
  }

  render () {
    const { error, posts } = this.props;
    return (
      <div>
        <DashBoardComponent posts={posts}/>
        {error && <span>Error loading the posts</span>}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    posts: state.dashboardReducer.posts || [],
    error: state.dashboardReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard));
