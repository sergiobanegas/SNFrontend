import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import moment from 'moment';

export default class ConversationListComponent extends Component {
  render () {
    const { conversations } = this.props;
    return (
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
    )
  }

}
