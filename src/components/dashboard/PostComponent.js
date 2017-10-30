import React from 'react';
import moment from 'moment';
import { Card, Accordion, Icon, Comment, Loader } from 'semantic-ui-react';
import CommentContainer from '../../containers/Dashboard/CommentContainer';

const PostComponent = ({post, comments, active, onTogglePostComments, loadingComments}) => (
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
        <Accordion.Title active={active} onClick={onTogglePostComments}>
          <Icon name="dropdown" />
            View comments ({post.comments.length})
        </Accordion.Title>
        <Accordion.Content active={active}>
          <Comment.Group>
            <Loader active={loadingComments} inline="centered"/>
              {
                comments.map(comment => {
                  return <CommentContainer key={comment._id} comment={comment}/>
                })
              }
          </Comment.Group>
        </Accordion.Content>
      </Accordion>
    </div>
  </Card>
);

export default PostComponent;

