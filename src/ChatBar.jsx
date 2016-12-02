import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', message: ''};
  }

  render() {
    return (
      <footer>
          <input
            id='username'
            type='text'
            placeholder='Your Name (Optional)'
            onKeyUp={this.props.handleUser}

          />
          <input
            id="new-message"
            type="text"
            placeholder="Type a message and hit ENTER"
            onKeyUp={this.props.onKeyUp}
          />
      </footer>
    );
  }
}
export default Chatbar;