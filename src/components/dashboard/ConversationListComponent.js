import React from 'react';
import Moment from 'react-moment';
import { List } from 'semantic-ui-react';

const ConversationListComponent = ({conversations}) => (
  <List divided verticalAlign="middle">
    {
      conversations.map(conversation => {
        return (
          <List.Item key={conversation._id}>
            <List.Content>
              <List.Header as="a">
              {
                conversation.members.map(member => {
                  return <span key={member._id}>{member.name}</span>
                })
              }
              </List.Header>
            </List.Content>
            <List.Content floated="right">
              <Moment date={conversation.createdAt} fromNow/>
            </List.Content>
          </List.Item>
        )
      })
    }
  </List>
);

export default ConversationListComponent;
