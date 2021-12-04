import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import CustomForm from './CustomForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
}

render() {
  return (
    <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Palindrome Checker</Navbar.Brand>
      </Container>
    </Navbar>

    <Container className="my-5">
      <CustomForm />
    </Container>
    
    </>
  )
  }
}

export default App;
