import React, {Component} from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import PostListContainer from '../../containers/Dashboard/PostListContainer';
import ConversationListContainer from '../../containers/Dashboard/ConversationListContainer';
import ConversationListToggleComponent from './ConversationListToggleComponent';
import styled from 'styled-components';

const DashBoardContainer = styled(Sidebar.Pushable)`
  min-height: 100vh;
  margin-bottom: 1em;
`;

const ContentContainer = styled(Sidebar.Pusher)`
  padding-top:1em;
  padding-bottom:1em;
`;
const ConversationsToggleButton = styled.div`
  position:absolute;
  right:0px;
  z-index:100;
`;

export default class DashboardComponent extends Component {


  render () {
    const { conversations, conversationsVisible, onToggleConversations } = this.props;
    return (
      <DashBoardContainer>
          <Sidebar
            as={Segment}
            animation='push'
            direction='right'
            visible={conversationsVisible}
            icon='labeled'
            vertical
          >
          <ConversationListContainer conversations={conversations} visible={conversationsVisible}/>
          </Sidebar>
          <ContentContainer>
            <div>
            <ConversationsToggleButton>
              <ConversationListToggleComponent onToggle={onToggleConversations}/>
            </ConversationsToggleButton>
            <PostListContainer/>
            </div>
          </ContentContainer>
        </DashBoardContainer>
    );
  }

}
