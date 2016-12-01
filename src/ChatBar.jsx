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
    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert( 'A name was submitted: ' + this.state.value );
  }

  didPressEnter(event) {
    if (event.key === 'Enter') {
      //if the user presses enter, we want to submit the form
      this.setState({ messages: event.target.value});
      console.log('do validate')
      //TODO: call the function inside app component that concats the new message to the messagelist
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