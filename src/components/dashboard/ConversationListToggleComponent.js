import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class ConversationListToggleComponent extends Component {
  render () {
    const { onToggle } = this.props;
    return <Button primary circular icon="comments" floated='right' onClick={onToggle}/>;
  }

}
