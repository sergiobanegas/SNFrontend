import React, {Component} from 'react';
import PostComponent from './PostComponent';
import { Grid } from 'semantic-ui-react';

export default class PostListComponent extends Component {

  render () {
    const { posts, replies, activePostsIds, activeCommentsIds, comments, onToggleCommentReplies, onCommentLiked, onReplyLiked, onTogglePostComments } = this.props;
    return (
      <Grid centered>
        <Grid.Column computer={8} tablet={12} mobile={14}>
          {
            posts.map(post => {
              let postComments = comments.get(post._id) || [];
              return (
                <PostComponent
                  key={post._id}
                  post={post}
                  activePostsIds={activePostsIds}
                  activeCommentsIds={activeCommentsIds}
                  comments={postComments}
                  replies={replies}
                  onToggleCommentReplies={onToggleCommentReplies}
                  onTogglePostComments={onTogglePostComments}
                  onCommentLiked={onCommentLiked}
                  onReplyLiked={onReplyLiked}
                  />
                )
              })
            }
            { posts.length === 0 && <span>No posts to show</span>}
        </Grid.Column>
      </Grid>
    );
  }

}
