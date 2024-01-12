import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
            <Nav.Link as={Link} to = "/">HOME</Nav.Link>
            <Nav.Link as={Link} to = "/signup">signup</Nav.Link>
            <Nav.Link as={Link} to = "/login">Login</Nav.Link>
            <Nav.Link as={Link} to = "/profile">profile</Nav.Link>
            <Nav.Link as={Link} to = "/post">Post</Nav.Link>
            <Nav.Link as={Link} to = "/postlist">PostList</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
