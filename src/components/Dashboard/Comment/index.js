import React from 'react';
import Moment from 'react-moment';
import { Accordion, Icon, Comment, Loader } from 'semantic-ui-react';
import CommentContainer from '../../../containers/Dashboard/Comment';
import NewCommentContainer from '../../../containers/Dashboard/Comment/NewComment';

const CommentComponent = ({ comment, replies, active, numberOfReplies, onToggleCommentReplies, onCommentLiked, likes, loadingReplies, onOpenForm, activeForm }) => (
  <Comment key={comment._id}>
    <Comment.Avatar src={comment.author.avatar} />
    <Comment.Content>
      <Comment.Author as="a">{comment.author.name}</Comment.Author>
      <Comment.Metadata>
        <Moment date={comment.createdAt} fromNow/>
      </Comment.Metadata>
        <Comment.Text>{comment.content}</Comment.Text>
       <Comment.Actions>
          <Comment.Action onClick={onCommentLiked}>
            <Icon color="green" name="thumbs outline up"/>
            Like {likes.length > 0 && <span>({likes.length})</span>}
          </Comment.Action>
         <Comment.Action onClick={onOpenForm}>Reply</Comment.Action>
       </Comment.Actions>
     </Comment.Content>
     {
       comment.replies.length > 0 && (
         <div>
           <Accordion>
             <Accordion.Title active={active} onClick={onToggleCommentReplies}>
               <Icon name="dropdown"/>
               View comments ({numberOfReplies})
             </Accordion.Title>
           </Accordion>
           <Comment.Group>
           {active && (
             <div>
               <Loader active={loadingReplies} inline="centered"/>
               {replies.map(reply => {
                return <CommentContainer key={reply._id} comment={reply}/>
               })}
               </div>
             )}
           </Comment.Group>
         </div>
       )
     }
     {activeForm && <NewCommentContainer parentId={comment._id}/>}
  </Comment>
);

export default CommentComponent;
