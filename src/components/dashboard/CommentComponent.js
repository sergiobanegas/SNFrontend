import React, {Component} from 'react';
import moment from 'moment';
import { Accordion, Icon, Comment, Loader } from 'semantic-ui-react';

export default class CommentComponent extends Component {

  handleViewCommentReplies(){
    const { onToggleCommentReplies, comment } = this.props;
    onToggleCommentReplies(comment._id);
  }

  onLike() {
    const { onCommentLiked, comment, onReplyLiked } = this.props;
    if(comment.parent) {
      onReplyLiked(comment._id, comment.parent);
    } else {
      onCommentLiked(comment._id, comment.post);
    }

  }

  render () {
    const { comment, replies, activeCommentsIds, onToggleCommentReplies, onCommentLiked, onReplyLiked } = this.props;
    let active = activeCommentsIds.indexOf(comment._id) > -1;
    let commentReplies = !replies ? [] : replies.get(comment._id) ? replies.get(comment._id) : [];
    let loading = commentReplies.length > 0 && replies.get(comment._id) === undefined;
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
              <Comment.Action onClick={this.onLike.bind(this)}>
                <Icon color='green' name='thumbs outline up'/>
                Like ({comment.likes.length})
              </Comment.Action>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
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
               {active && (
                 <div>
                   <Loader active={loading} inline="centered"/>
                   {commentReplies.map(reply => {
                         return <CommentComponent replies={replies} comment={reply} activeCommentsIds={activeCommentsIds} key={reply._id} onToggleCommentReplies={onToggleCommentReplies} onCommentLiked={onCommentLiked} onReplyLiked={onReplyLiked}/>
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
