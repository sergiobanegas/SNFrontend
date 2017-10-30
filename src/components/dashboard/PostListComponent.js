import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostContainer from '../../containers/Dashboard/PostContainer';

const PostListComponent = ({posts}) => (
  <Grid centered>
    <Grid.Column computer={8} tablet={12} mobile={14}>
      {
        posts.map(post => {
          return <PostContainer key={post._id} post={post}/>;
        })
      }
      { posts.length === 0 && <span>No posts to show</span>}
    </Grid.Column>
  </Grid>

);

export default PostListComponent;
