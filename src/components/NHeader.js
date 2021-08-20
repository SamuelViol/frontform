import React, { Component } from 'react'
import logo from '../images/logo.png'
import './NHeader.css'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

class NHeader extends Component {
    render() {
        return (
            <div className="hcolor">
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand style={{ color: 'white' }} href="#home"> <img src={logo} width="40px" height="40px" />React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link style={{ color: 'white' }} href="#features">Features</Nav.Link>
                                <Nav.Link style={{ color: 'white' }} href="#pricing">Pricing</Nav.Link>
                                <NavDropdown style={{ color: 'white' }} title={<span style={{ color: 'white' }}>Mais Opções</span>} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link style={{ color: 'white' }} href="#deets">More deets</Nav.Link>
                                <Nav.Link style={{ color: 'white' }} eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NHeader