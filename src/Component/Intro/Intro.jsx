import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Button,Container,Col,Row } from 'react-bootstrap';
import '../Intro/Intro.css'
import logo from '../../Assets/hashcode_logo_current.png'
import logoBg from '../../Assets/logoBg.mp4'
import Navbar from '../Navbar/Navbar';







function Intro() {
    return (
      <div className="base">
         
            <Container fluid>
            <Row >
                <Col className="base-1" >
                <section className="base-vid">
                    <video src={logoBg} autoPlay loop muted width="100%" ></video>
                <h1 className="Blog-logo"><b>#</b>CODEJR</h1>
                <div className="add">
                    <p className="add-p">Make Your Child Future Ready</p>
                    <h1 className="add-h1">With our Instructor-led Online Coding Classes !!</h1>
                   <a href="/" className="add-btn">BookNow</a>

                </div>
                </section>

                
                
                </Col>
                <Col   className="base-2">
                <h2 className="base-heading-main" >Blog</h2>
                        <hr />
                    <h2 className="Blog-heading">What</h2>
                    <h1 className="Blog-sub">What is Coding for kids?</h1>
                    <p className="Blog-text">Coding is the method of giving commands to a 
                        computer to perform a specific task. Computer
                         programmers use a variety of ‘languages’ such
                          as Java, Javascript, AI and Python to design, write
                           and maintain computer programs. Learning to code
                            broadens problem solving and critical thinking 
                            skills, making it a great opportunity for kids 
                            to cultivate those skills while young. Coding 
                            is used to design the websites, apps, games 
                            and other technologies we interact with every day.</p>
                            <hr/>
                    <h2 className="Blog-heading">Why</h2>
                    <h1 className="Blog-sub">Why #Code JR?</h1>
                    <p className="Blog-text"> Introducing computer programming to kids may seem tough, but our experience-based technology methods can make it fun and engaging for them.
                        Our LIVE and interactive sessions are specifically designed for kids of the age group 6-14 to make them aware about logic, structure, inventive thinking, sequencing, collaborating, algorithmic thinking, etc.
                        Our faculty members are highly competent and qualified people with expertise in computer science and children’s education. They can assess the student and adjust the curriculum for optimal learning.</p>
                    <hr/>
                    <h2 className="Blog-heading">About</h2>
                    <p className="Blog-text">#Code JR, an initiative by LEJHRO is a coding platform for 
                        kids. In our instructor-led online classes, students will
                         learn concepts like Artificial Intelligence, Machine Learning
                         , Data Science, Deep Learning, Computer Vision, Natural Language 
                         Processing, App & Game Development, etc. Our courses ensure kids 
                         spend more time practicing than just learning theory. We include
                          activities like playing games or solving logic puzzles to create
                           an interactive and fun learning experience. Our diverse curriculum 
                           is built by leading industry experts, covering essential kid's
                            coding languages that enhance algorithmic thinking and fundamentals 
                            like logic & structure.</p>
               
                

                </Col>
            </Row>
        </Container>
    
      </div>
    )
}

export default Intro
