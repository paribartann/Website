
import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';
//import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


class NavComponent extends React.Component {

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect className="navBar">
                    <div className="navItem">
                    <Nav style={{display:"flex", flexDirection:"row"}}>
                        <LinkContainer to='/'>
                            <NavItem eventKey={1} className="navItem">HOME</NavItem>
                        </LinkContainer>

                        <LinkContainer to='/projects'>
                            <NavItem eventKey={2} className="navItem">PROJECTS</NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/courses'}>
                            <NavItem eventKey={3} className="navItem">COURSES</NavItem>
                        </LinkContainer>

                        <LinkContainer to='/articles'>
                            <NavItem eventKey={4}  className="navItem" href="#">ARTICLES</NavItem>
                        </LinkContainer>

                        <NavDropdown eventKey={5} className="navItem" title="LINKS" id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1} href="https://drive.google.com/file/d/1RS-1NdUkNge7KC2gKAWqHdWtNnku4fiV/view?usp=sharing" target="_blank" rel='noopener noreferrer'>Resume</MenuItem>
                            <MenuItem eventKey={5.2} href="https://github.com/paribartann" target="_blank" rel='noopener noreferrer'>Github</MenuItem>
                            <MenuItem eventKey={5.3} href="https://www.linkedin.com/in/paribartan-dhakal-61452b135/" target="_blank" rel='noopener noreferrer'>LinkedIn</MenuItem>
                            <MenuItem eventKey={5.4} href="https://www.facebook.com/paribartan.dhakal" target="_blank" rel='noopener noreferrer'>Facebook</MenuItem>
                            <MenuItem eventKey={5.5} href="https://twitter.com/Paribartann" target="_blank" rel='noopener noreferrer'>Twitter</MenuItem>
                        </NavDropdown>

                        <LinkContainer to='/contact'>
                            <NavItem eventKey={6} className="navItem" href="#">CONTACTS</NavItem>
                        </LinkContainer>
                    </Nav>
                    </div>
        
                </Navbar>
            </div>

        );
    }
}

export default NavComponent;