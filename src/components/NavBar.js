
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png'

function NavScrollExample({Search}) {
  const onSearch = (word) => { 
    Search(word)
   }
  return (
    <Navbar bg="light" expand="lg" className='NavBar-Movie position-sticky'>
      <Container className='align-items-center'>
        <Navbar.Brand href="/">
          <a className='me-3' href="/"><Image className="logo-movie" src={logo} alt='Logo Movie'></Image></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="search-movie d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e)=>{onSearch(e.target.value)}}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;