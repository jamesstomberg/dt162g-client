import { Link } from 'react-router-dom';
import Userfront from '@userfront/toolkit/react';
import { LogoutButton } from '@userfront/toolkit/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

Userfront.init("8nwy5zrn");

const CustomNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Link to="/"><Navbar.Brand>DT162G</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Startsida</Link>
                        {
                            !Userfront.accessToken() &&
                            <Link className="nav-link" to="/login">Logga in</Link>
                        }
                        {
                            !Userfront.accessToken() &&
                            <Link className="nav-link" to="/register">Registrera dig</Link>
                        }
                        {
                            Userfront.accessToken() &&
                            <Link className="nav-link" to="/dashboard">Administration</Link>
                        }
                        {
                            Userfront.accessToken() &&
                            <Link className="nav-link" to="/dashboard">Logga ut</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default CustomNav;