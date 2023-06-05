import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  Link,BrowserRouter as Router
} from "react-router-dom";
import register from '../components/register';
import login from './Login';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h7>Rise</h7>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <a href="#home"></a><h4> Home </h4>
               <a href = "#joinus"></a><h4> Join Us </h4>
              <a a href="#wework"></a><h4> How We Work </h4>
            </Nav>
            <span className="navbar-text">
              
              <HashLink to='#connect'>
                <button className="vvd"><Link to="/login"><span>Login</span></Link></button>
                <button className="vvd"><Link to ="/register"><span>Signup</span></Link></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
export default NavBar