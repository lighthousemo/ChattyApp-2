import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      messages: [
        {
          id: 1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?'
        },
        {
          id: 2,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        },
        {
          id: 3,
          username: 'Jamal',
          content: 'This mesage is a test. If you are seeing this then you are on the right track.'
        }
      ]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const newMessage = {id: 4, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages: messages });
    }, 3000);
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar/>
      </div>
    );
  }
}

export default App;