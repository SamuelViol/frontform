import React, { Component } from 'react'
import './NHeader.css'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

class NHeader extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Elo Retaguarda</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link  href="#sobre">Sobre</Nav.Link>
                                    <Nav.Link  href="#services">Serviços</Nav.Link>
                                    <Nav.Link  href="#contact">Contato</Nav.Link>
                                    <NavDropdown renderMenuOnMount={true} title="Dropdown" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}

export default NHeader