import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Col,
  Container,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import anon from '../../images/anon.jpg';

import { increment, decrement, reset } from './actionCreators';
import { addTodo } from '../../redux/actions';
import { getTodos } from '../../redux/selectors';

const mapStateToProps = (state, ownProps) => ({
  // counter: state.counter,
});

const mapDispatchToProps = { increment, decrement, reset };

class Navigationbar extends React.Component {
  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input);

    // sets state back to empty string
    this.setState({ input: '' });
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">OnClickCoin!</Navbar.Brand>
            <Nav.Link href="/send">Send</Nav.Link>
            <Nav.Link href="/ico">ICO</Nav.Link>
            <Nav.Link href="/info">Info</Nav.Link>
            <Nav.Link href="/data">Data</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" />
            &nbsp;&nbsp;&nbsp;
          </Form>
          <Nav>
            <Navbar.Brand href="/profile">
              {' '}
              <Image
                roundedCircle
                src={anon}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Profile logo"
              />
            </Navbar.Brand>
          </Nav>
          &nbsp;
          <Button variant="outline-primary" href="/login">
            Login/Register
          </Button>
          &nbsp;
          <Button variant="outline-primary" href="/logout">
            Logout
          </Button>
        </Navbar>
      </>
    );
  }
}

export default connect(state => ({ todos: getTodos(state) }))(Navigationbar);
