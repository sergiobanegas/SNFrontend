import React from 'react';
import Moment from 'react-moment';
import { Card, Accordion, Icon, Comment, Loader, Container, Image } from 'semantic-ui-react';
import CommentContainer from '../../containers/Dashboard/Comment';
import NewCommentContainer from '../../containers/Dashboard/NewComment';
import { PARENT_TYPE } from '../../types/dashboard';

const PostComponent = ({post, comments, active, onTogglePostComments, loadingComments}) => (
  <Card key={post._id} fluid>
    <Card.Content>
      <Card.Header>
       {post.title}
      </Card.Header>
      <Card.Meta>
        {post.author.name}
        <Container textAlign="right">
          <Image avatar src={post.author.avatar} alt={post.author.name}/>
        </Container>
      </Card.Meta>
      <Card.Description>
        {post.content}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Container textAlign="right">
        <Moment date={post.createdAt} fromNow/>
      </Container>
      <Accordion>
        <Accordion.Title active={active} onClick={onTogglePostComments}>
          <Icon name="dropdown" />
            View comments ({post.comments.length})
        </Accordion.Title>
      </Accordion>
      <Comment.Group threaded collapsed={!active}>
        <Loader active={loadingComments} inline="centered"/>
          {
            comments.map(comment => {
               return <CommentContainer key={comment._id} comment={comment}/>
            })
          }
      </Comment.Group>
    </Card.Content>
    <Card.Content extra>
      <NewCommentContainer parentId={post._id} parentType={PARENT_TYPE.POST}/>
    </Card.Content>
  </Card>
);

export default PostComponent;
