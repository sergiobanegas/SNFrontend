import React from 'react';
import { List } from 'semantic-ui-react';
import moment from 'moment';

const ConversationListComponent = ({conversations}) => (
  <List divided verticalAlign='middle'>
    {
      conversations.map(conversation => {
        return (
          <List.Item key={conversation._id}>
            <List.Content>
              <List.Header as='a'>
              {
                conversation.members.map(member => {
                  return <span key={member._id}>{member.name}</span>
                })
              }
              </List.Header>
            </List.Content>
            <List.Content floated='right'>
              {moment(conversation.createdAt).fromNow()}
            </List.Content>
          </List.Item>
        )
      })
    }
  </List>
);

export default ConversationListComponent;
