import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this works!
    console.log('Success: Typing in the input box changes a change in state.');
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Submission');
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <footer>
        <form onSubmit={this.handleSubmit}>
          <input id='username' type="text" placeholder='Your Name (Optional)' value={this.state.value} onChange={this.handleChange} />
          <input id='new-message' type='text' placeholder='Type a message and hit ENTER' />
          // need to
        </form>
      </footer>
    );
  }
}
export default Chatbar;

