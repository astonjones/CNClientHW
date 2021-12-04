import { Navbar, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'T',
      isPalindrome: false,
      renderText: "No Palindrome Detected",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e){
  let newValue = e.target.value;
  this.setState({value: newValue})
}

  handleSubmit(e) {
    e.preventDefault();
      this.setState({renderText: false})
      axios.post('http://localhost:3001/palindrome', this.state)
        .then(res => {
          if(res.data.isPalindrome){
            this.setState({renderText: "Oh Snap! This is a palindrome"})
          }
          else{
            this.setState({renderText: "No Palindrome Detected"})
          }
        })
        .catch(error => console.log(error));
  }

  render() {
  return (
    <>
      <h3>Enter in a string and see if it is a palindrome, then press submit</h3>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text" 
            placeholder="Enter String" 
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">{this.state.renderText}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
  }
}

export default CustomForm;
