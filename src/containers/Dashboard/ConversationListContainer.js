import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConversationListComponent from '../../components/Dashboard/ConversationListComponent';

class ConversationListContainer extends Component {
  render () {
    const { conversations, conversationsVisible } = this.props;
    return (
      <ConversationListComponent conversations={conversations} visible={conversationsVisible}/>
    )
  }

}

const mapStateToProps = state => {
  return {
    conversations: state.dashboardReducer.conversationsReducer.conversations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationListContainer);
