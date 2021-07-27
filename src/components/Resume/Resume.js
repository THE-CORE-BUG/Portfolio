import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Ritam's Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const sem="Till 5th Sem";
  const cgpa = 8.5;


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container fluid>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        
        <Row className="resume">
          <Col md={6} className="resume-left">

            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Graphics and UI engineer"
              date="June 2019 - March 2020"
              content={[
                "Worked for a social initiative 'myBondhu' that aims at filtering real time hospitals for Covid Patients"
              ]}
            />
            <Resumecontent
              title="Web developer and Video editor at Sarkar's Interior Studio"
              date="June 2020 - March 2021"
              content={[
                "Made an interactive web-page", "Edited video for it's official Youtube Channel"
              ]}
            />

          </Col>


          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech with IT at Techno Main Salt Lake "
              date="2018 - Present"
              content={[`CGPA: ${cgpa} (${sem})`]}
            />
            <Resumecontent
              title="12TH BOARD [The Aryans School,West Bengal]"
              date="2018"
              content={["Precentage: 82%"]}
            />
            <Resumecontent
              title="10TH BOARD [The Aryans School,West Bengal] "
              date="2016"
              content={["Precentage: 91.4%"]}
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
