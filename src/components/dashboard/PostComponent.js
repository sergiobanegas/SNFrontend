import React, {Component} from 'react';
import moment from 'moment';
import { Card, Accordion, Icon, Comment, Loader } from 'semantic-ui-react';
import CommentComponent from './CommentComponent';

export default class PostComponent extends Component {

  handleViewPostComments(){
    const { onTogglePostComments, post } = this.props;
    onTogglePostComments(post._id);
  }

  render () {
    const { post, replies, onToggleCommentReplies, onCommentLiked, onReplyLiked, activePostsIds, activeCommentsIds, comments } = this.props;
    let active = activePostsIds.indexOf(post._id) > -1;
    let loading = post.comments.length > 0 && comments.length === 0;
    return (
      <Card key={post._id} fluid>
       <Card.Content>
       <Card.Header>
         {post.title}
       </Card.Header>
       <Card.Meta>
      {post.author.name}
      <div className="right floated">
        <img className="ui avatar image" src={post.author.avatar} alt={post.author.name}/>
    </div>
    </Card.Meta>
       <Card.Description>
      {post.content}
    </Card.Description>
  </Card.Content>
       <div className="extra content">
       <span className="right floated time">{moment(post.createdAt).fromNow()}</span>
       <Accordion>
        <Accordion.Title active={active} onClick={this.handleViewPostComments.bind(this)}>
          <Icon name="dropdown" />
          View comments ({post.comments.length})
        </Accordion.Title>
        <Accordion.Content active={active}>
            <Comment.Group>
             <Loader active={loading} inline="centered"/>
              {comments.map(comment => {
                return <CommentComponent comment={comment} key={comment._id} activeCommentsIds={activeCommentsIds} replies={replies} onToggleCommentReplies={onToggleCommentReplies} onCommentLiked={onCommentLiked} onReplyLiked={onReplyLiked}/>
              })}
            </Comment.Group>
        </Accordion.Content>
       </Accordion>
        </div>
    </Card>
    );
  }

}
