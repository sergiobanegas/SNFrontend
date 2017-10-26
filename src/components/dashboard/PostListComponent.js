import React, {Component} from 'react';
import PostComponent from './PostComponent';

export default class PostListComponent extends Component {

  render () {
    const { posts, replies, activePostsIds, activeCommentsIds, comments, onToggleCommentReplies, onTogglePostComments } = this.props;
    return (
      <div className="ui one center aligned page grid">
        <div className="twelve wide column left aligned">
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
        </div>
      </div>
    );
  }

}
