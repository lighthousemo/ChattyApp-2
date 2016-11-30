import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    return (
      <div id="message-list">
        {this.props.messages.map(function(messages) {
          return (<Message key={messages.id} username={messages.username} content={messages.content} />);
          })
        }
      </div>
    );
  }
}

export default MessageList;