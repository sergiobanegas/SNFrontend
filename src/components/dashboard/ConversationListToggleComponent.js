import React from 'react';
import { Button } from 'semantic-ui-react';

const ConversationListToggleComponent = ({onToggle}) => (
	<Button primary circular icon="comments" floated='right' onClick={onToggle}/>
);

export default ConversationListToggleComponent;
