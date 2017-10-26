import React, {Component} from 'react';
import PostComponent from './PostComponent';
import { Grid } from 'semantic-ui-react';

export default class PostListComponent extends Component {

  render () {
    const { posts, replies, activePostsIds, activeCommentsIds, comments, onToggleCommentReplies, onTogglePostComments } = this.props;
    return (
      <Grid centered>
        <Grid.Column width={8}>
          {
            posts.map(post => {
              return (
                <PostComponent
                  key={post._id}
                  post={post}
                  activePostsIds={activePostsIds}
                  activeCommentsIds={activeCommentsIds}
                  comments={comments}
                  replies={replies}
                  onToggleCommentReplies={onToggleCommentReplies}
                  onTogglePostComments={onTogglePostComments}
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
