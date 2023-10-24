import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [selcted, setSelectedOption] = useState("All");
    return (
        <Navbar expand="lg" bg="light">
            < Container fluid >
                <Navbar.Brand >
                    <Link to={`/`} className='text-dark' style={{ textDecoration: "none" }}>
                        IMDB Clone
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-3 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <Link to={`/movies`} className='text-dark' style={{ textDecoration: "none" }}>
                                    List All Movies
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={`/shows`} className='text-dark' style={{ textDecoration: "none" }}>
                                    List All TV Shows
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={`/series`} className='text-dark' style={{ textDecoration: "none" }}>
                                    List All Series
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link
                        className="ms-3 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        Advanced Search
                    </Nav.Link>
                    <Form className="d-flex ms-auto">
                        <Form.Select aria-label="Default select example" onChange={(e) => { console.log(e.target.value); setSelectedOption(e.target.value); }}>
                            <option>All</option>
                            <option value="movie">Movies</option>
                            <option value="series">Series</option>
                            <option value="tv_shows">TV Shows</option>
                            <option value="celebs">Celebs</option>
                        </Form.Select>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-auto ps-3"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" xs={6}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default NavBar;