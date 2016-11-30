import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert( 'A name was submitted: ' + this.state.value );
  }

  didPressEnter(event) {
    if ( event.key === 'Enter' ) {
      console.log( 'do validate' )
      event.preventDefault()
    }
  }

  render() {
    return (
      <footer>
        <form onSubmit={this.handleSubmit}>
          <input id='username' type="text" placeholder='Your Name (Optional)' value={this.state.value} onChange={this.handleChange} onKeyPress={this.didPressEnter} />
          <input id='new-message' type='text' placeholder='Type a message and hit ENTER' />
        </form>
      </footer>
    );
  }
}
export default Chatbar;

function didPressEnter(key) {
  if (key === 'enter') {
    alert('user pressed enter.')
  }
  return;
}