import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavBar() {
  return (
    <Navbar expand="md" data-bs-theme="dark" className="mainNavBar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" defaultActiveKey="#home" variant='underline'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About me</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;