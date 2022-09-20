import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState} from "react";

export const BasicNavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    
    window.addEventListener("scroll", onScroll);
  }, [] )
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="/logo.svg" //gotta make a logo time to flex creative muscles
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sean's Website Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#connections">Connections</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}