import React from 'react'
import '../Navbar/Navbar.css'
import { Button,Container,Col,Row } from 'react-bootstrap';

function Navbar() {
    return (
        <>
          <Container fluid className="Navbar">
            <Row style={{justifyContent:"center"} } className="Navbar-Row">
               <ul className="list-unstyled">
                   <li ><a href="/" className="Navbar-icons">Home</a></li>
                   <li ><a href="/" className="Navbar-icons">What</a></li>
                   <li><a href="/" className="Navbar-icons">Why</a></li>
                   <li><a href="/" className="Navbar-icons">Course</a></li>
                   <li><a href="/" className="Navbar-icons">About</a></li>

               </ul>
            </Row>
        </Container>  
        </>
    )
}

export default Navbar
