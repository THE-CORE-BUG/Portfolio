import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {  AiOutlineTwitter,  AiFillInstagram} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        <Row>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Programmer and an Entertainer
              <br />
              <br />Bulding the bricks with the help of &nbsp;
              <b className="purple"> C, Java and Python. </b>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <b className="purple">Web Application Development, VFX designing, Databases &nbsp; </b> and
                also in areas related to &nbsp;
              <b className="purple">
                Deep Learning and Data Science.
              </b>
              <br />
              <br />
              Being a wanderer in the vast coliseum, I love to discover about &nbsp;<b className="purple">Interstellar Space.</b>
            </p>
          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>


        </Row>


        <Row>


          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

            

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ritam.kaviraj.94/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/KabirajRitam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritam-kabiraj-76404413a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_unusual_overdose/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>


            </ul>
          </Col>

          
        </Row>


      </Container>
    </Container>
  );
}
export default Home2;
