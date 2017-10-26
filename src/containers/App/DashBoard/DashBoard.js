import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Sidebar, Segment } from 'semantic-ui-react';
import {getDashBoardPosts, getUserConversations, toggleConversations, togglePostComments, toggleCommentReplies} from '../../../actions/dashboard/dashboard';
import PostListComponent from '../../../components/dashboard/PostListComponent';
import ConversationListComponent from '../../../components/dashboard/ConversationListComponent';
import ConversationListToggleComponent from '../../../components/dashboard/ConversationListToggleComponent';
import styled from 'styled-components';

const DashBoardContainer = styled(Sidebar.Pushable)`
  min-height: 100vh;
  margin-bottom: 1em;
`;

const ContentContainer = styled(Sidebar.Pusher)`
  padding-top:1em;
`;

class DashBoard extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getDashBoardPosts());
    dispatch(getUserConversations());
  }

  onToggleConversations() {
    const { dispatch } = this.props;
    dispatch(toggleConversations());
  }

  onTogglePostComments(id) {
    const { dispatch } = this.props;
    dispatch(togglePostComments(id));
  }

  onToggleCommentReplies(id) {
    const { dispatch } = this.props;
    dispatch(toggleCommentReplies(id));
  }

  render () {
    const { activePostsIds, activeCommentsIds, posts, replies, conversations, conversationsVisible, comments } = this.props;
    return (
      <DashBoardContainer>
          <Sidebar
            as={Segment}
            animation='push'
            direction='right'
            visible={conversationsVisible}
            icon='labeled'
            vertical
          >
          <ConversationListComponent conversations={conversations} visible={conversationsVisible}/>
          </Sidebar>
          <ContentContainer>
            <div>
            <ConversationListToggleComponent onToggle={this.onToggleConversations.bind(this)}/>
            <PostListComponent
              posts={posts}
              activePostsIds={activePostsIds}
              activeCommentsIds={activeCommentsIds}
              onTogglePostComments={this.onTogglePostComments.bind(this)}
              onToggleCommentReplies={this.onToggleCommentReplies.bind(this)}
              replies={replies}
              comments={comments}/>
            </div>
          </ContentContainer>
        </DashBoardContainer>
    );
  }

}

const mapStateToProps = state => {
  return {
    posts: state.dashboardReducer.posts || [],
    errorPosts: state.dashboardReducer.errorPosts,
    conversations: state.dashboardReducer.conversations || [],
    errorConversations: state.dashboardReducer.errorConversations,
    conversationsVisible: state.dashboardReducer.conversationsVisible,
    activePostsIds: state.dashboardReducer.activePostsIds || [],
    activeCommentsIds: state.dashboardReducer.activeCommentsIds || [],
    comments: state.dashboardReducer.comments,
    replies: state.dashboardReducer.replies || []
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
