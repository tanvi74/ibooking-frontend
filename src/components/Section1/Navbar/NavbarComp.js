import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Icon from '../../../images/icon1.png';
import IconDark from '../../../images/ibooking-logo-black.png';
import './Navbar.css';

export default function NavbarComp() {
    const [navBackground, setnavBackground] = React.useState(true);

    const navRef = React.useRef();
    navRef.current = navBackground;


    React.useEffect(() => {
       const handScroll = () => {
           const show = window.scrollY > 310;
           if(show)
                setnavBackground(false);
            else
                setnavBackground(true);
       } 

       document.addEventListener('scroll', handScroll);
       return () => {
           document.removeEventListener('scroll', handScroll);
       }
    }, [])

    return (
        <>
        <div className="navbarcopm">
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor:`${navRef.current ? 'transparent' : 'white'}` }}>
                <Container>
                <Navbar.Brand href="#home">
                    <img src={navRef.current ? Icon : IconDark} width={150} alt="icon"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#deets" style={{color: `${navRef.current ? 'white' : 'black'}`}}>More Businesses</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" style={{color: `${navRef.current ? 'white' : 'black'}`}}>Login</Nav.Link>
                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
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

