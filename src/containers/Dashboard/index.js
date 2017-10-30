import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ACTIVE_ITEMS} from '../../types/menu';
import {getUserConversations, toggleConversations} from '../../actions/dashboard/conversations';
import MenuContainer from '../Menu';
import DashboardComponent from '../../components/Dashboard';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);
    this.onToggleConversations = this.onToggleConversations.bind(this);
  }

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
      <div>
        <MenuContainer activeItem={ACTIVE_ITEMS.HOME}/>
        <DashboardComponent
          conversations={conversations}
          conversationsVisible={conversationsVisible}
          onToggleConversations={this.onToggleConversations}
        />
      </div>
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
)(DashboardContainer));
