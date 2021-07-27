import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {SiGmail} from "react-icons/si";

function Footer() {
  const [time,setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(setTime(new Date()),1000);
    return () => clearInterval(timer)
  })

  return (
    <Container fluid className="footer">
      <Row>


        <Col md="4" className="footer-copywright">
          <h3>Made with 🌶️ by <span style={{color: '#fff'}}><b>Ritam Kabiraj</b></span></h3>
        </Col>


        <Col md="4" className="footer-copywright">
          <h3>{time.toLocaleTimeString()} &nbsp; IST</h3>
        </Col>


        <Col md="4" className="footer-body">
          <p style={{color: "white"}} >Drop a Mail - &nbsp; <a href="mailto:ritamkaviraj26@gmail.com "> <SiGmail/> </a> </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
