import React, { Component } from 'react';
import moment from 'moment';
import { Accordion, Icon, Comment, Loader } from 'semantic-ui-react';
import CommentContainer from '../../containers/Dashboard/CommentContainer';

export default class CommentComponent extends Component {

  render () {
    const { comment, replies, active, onToggleCommentReplies, onCommentLiked, likes } = this.props;
    let loading = false;
    return (
      <Comment key={comment._id}>
        <Comment.Avatar src={comment.author.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.author.name}</Comment.Author>
          <Comment.Metadata>
            <div>{moment(comment.createdAt).fromNow()}</div>
          </Comment.Metadata>
            <Comment.Text>{comment.content}</Comment.Text>
           <Comment.Actions>
              <Comment.Action onClick={onCommentLiked}>
                <Icon color='green' name='thumbs outline up'/>
                Like ({likes.length})
              </Comment.Action>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
         {
           comment.replies.length > 0 && (
             <div>
               <Accordion>
                 <Accordion.Title active={active} onClick={onToggleCommentReplies}>
                   <Icon name='dropdown'/>
                   View comments ({comment.replies.length})
                 </Accordion.Title>
               </Accordion>
               <Comment.Group>
               {active && (
                 <div>
                   <Loader active={loading} inline="centered"/>
                   {replies.map(reply => {
                    return <CommentContainer key={reply._id} comment={reply}/>
                   })}
                   </div>
                 )}
               </Comment.Group>
             </div>
           )
         }
      </Comment>
    );
  }

}
