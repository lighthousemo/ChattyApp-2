import React from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends React.Component {

  constructor( props ) {
    super( props );
    this.handleMsg = this.handleMsg.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      usercount: 0,
      messages: [
        {
          id: 0,
          username: 'Anonymous1',
          content: 'I won\'t be impressed with technology until I can download food.'
        },
        {
          id: 1,
          username: 'Anonymous',
          content: 'Anonymous1 changed their name to nomnom.'
        }
      ]
    };
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      const newMessage = {id: 4, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages: messages });
    }, 3000);
  }

  handleMsg(event) {
    if (event.key === 'Enter') {
      console.log('message:', event.target.value);
      var oldId = this.state.messages.length;
      var newId = oldId + 1;
      var typedMsg  = event.target.value;
      const newMessage = {
        id: newId,
        username: this.state.currentUser.name,
        content: typedMsg
      }
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages: messages });
    }
  }

  handleUser(event) {
    console.log('username:', event.target.value);
    if (event.key === 'Enter') {
      var newState = this.state;
      this.setState( {currentuser: {name: event.target.value}});
    }
  }

  render() {
    console.log('rendering <App />');
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
          <span className='userCount'>{this.state.userCount} users online</span>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar
          currentUser={this.state.currentUser}
          handleUser={this.handleUser}
          onKeyUp={this.handleMsg}
        />
      </div>
    );
  }
}
export default App;