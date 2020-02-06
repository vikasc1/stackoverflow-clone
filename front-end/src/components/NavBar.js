import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = props => {
    return (
        // <nav>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">StackFlow</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/questions">Questions</Nav.Link>
            <Nav.Link href="/log_in">LogIn</Nav.Link>
            <Nav.Link href="/questions/new">Ask Question</Nav.Link>
            </Nav>
            </Navbar> 
    )
}

export default NavBar;