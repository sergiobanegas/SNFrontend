import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import PostContainer from '../../containers/Dashboard/PostContainer';

export default class PostListComponent extends Component {

  render () {
    const { posts } = this.props;
    return (
      <Grid centered>
        <Grid.Column computer={8} tablet={12} mobile={14}>
          {
            posts.map(post => {
              return (
                <PostContainer key={post._id} post={post}/>
                )
              })
            }
            { posts.length === 0 && <span>No posts to show</span>}
        </Grid.Column>
      </Grid>
    );
  }

}
