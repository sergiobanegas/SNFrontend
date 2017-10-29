import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUserConversations, toggleConversations} from '../../../actions/dashboard/conversations';
import DashboardComponent from '../../../components/Dashboard';

class Dashboard extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getUserConversations());
  }

  onToggleConversations() {
    const { dispatch } = this.props;
    dispatch(toggleConversations());
  }

  render () {
    const { conversations, conversationsVisible } = this.props;
    return (
      <DashboardComponent
        conversations={conversations}
        conversationsVisible={conversationsVisible}
        onToggleConversations={this.onToggleConversations.bind(this)}
        />
    );
  }

}

const mapStateToProps = state => {
  return {
    conversationsVisible: state.dashboardReducer.conversationsReducer.conversationsVisible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
