import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import moment from 'moment';

export default class ConversationListToggleComponent extends Component {
  render () {
    const { onToggle } = this.props;
    return <Button primary circular icon="comments" floated='right' onClick={onToggle}/>;
  }

}
