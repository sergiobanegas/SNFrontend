import React, {Component} from 'react';
import moment from 'moment';
import { Card, Accordion, Icon, Comment } from 'semantic-ui-react';

export default class PostListComponent extends Component {

  handleViewPostComments(postId, e, titleProps){
    const { activeIndex, onTogglePostComments } = this.props;
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    onTogglePostComments(postId, newIndex);
  }

  render () {
    const { posts, activeIndex, comments } = this.props;
    return (
      <div className="ui one center aligned page grid">
        <div className="twelve wide column left aligned">
        {posts.map((post, index) => {
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
           <Accordion >
            <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleViewPostComments.bind(this, post._id)}>
              <Icon name='dropdown' />
              View comments ({post.comments.length})
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
                <Comment.Group>
                  {comments.map(comment => {
                    return (
                      <Comment key={comment._id}>
                      <Comment.Avatar src={comment.author.avatar} />
                      <Comment.Author as='a'>{comment.author.name}</Comment.Author>
                      <Comment.Metadata>
                        <div>{moment(comment.createdAt).fromNow()}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.content}</Comment.Text>
                       <Comment.Action>Reply</Comment.Action>
                    </Comment>
                  )})}
                </Comment.Group>
            </Accordion.Content>
           </Accordion>
            </div>
        </Card>
      )
      })}
      </div>
      </div>
    );
  }

}
