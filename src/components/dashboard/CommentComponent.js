import React, {Component} from 'react';
import moment from 'moment';
import { Accordion, Icon, Comment } from 'semantic-ui-react';

export default class CommentComponent extends Component {

  handleViewCommentReplies(){
    const { onToggleCommentReplies, comment } = this.props;
    onToggleCommentReplies(comment._id);
  }

  render () {
    const { comment, replies, activeCommentsIds, onToggleCommentReplies } = this.props;
    let active = activeCommentsIds.indexOf(comment._id) > -1;
    let commentReplies = [];
    if (replies) {
       commentReplies = replies.get(comment._id) ? replies.get(comment._id) : [];
    }
    return (
      <Comment key={comment._id}>
        <Comment.Avatar src={comment.author.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.author.name}</Comment.Author>
          <Comment.Metadata>
            <div>{moment(comment.createdAt).fromNow()}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.content}</Comment.Text>
           <Comment.Action>Reply</Comment.Action>
         </Comment.Content>
         {
           comment.replies.length > 0 && (
             <div>
             <Accordion>
               <Accordion.Title active={active} onClick={this.handleViewCommentReplies.bind(this)}>
                 <Icon name='dropdown'/>
                 View comments ({comment.replies.length})
               </Accordion.Title>
             </Accordion>
             <Comment.Group>
               {
                 active == true && commentReplies.map(reply => {
                   return <CommentComponent replies={replies} comment={reply} activeCommentsIds={activeCommentsIds} key={reply._id} onToggleCommentReplies={onToggleCommentReplies}/>
                 })
              }
             </Comment.Group>
             </div>
           )
         }
      </Comment>
    );
  }

}
