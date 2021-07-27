import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillRocket } from "react-icons/ai";
import { BiFootball, BiCameraMovie } from "react-icons/bi";
import { MdFlightTakeoff } from "react-icons/md";
import {GiMicrophone} from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify" }}>

            Hey folks, I am <span className="purple">Ritam Kabiraj </span>
            from <span className="purple"> Kolkata, India</span>
            <br />
            <br />

            I am an Engineering student, pursuing B.Tech in Information Technology from <span className="purple">Techno Main Salt Lake</span>
            <br />
            <br />
            Mentioned below are few of my favourites ! Same pinch ? <br />Let's talk over a coffee !
          </p>
          <ul>
            <li className="about-activity">
              <BiFootball /> FC Barcelona
            </li>
            <li className="about-activity">
              <BiCameraMovie /> Interstellar
            </li>
            <li className="about-activity">
              <MdFlightTakeoff /> Brazil
            </li>
            <li className="about-activity">
              <AiFillRocket /> ISRO
            </li>
            <li className="about-activity">
              <GiMicrophone /> AKON & Justin Bieber
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
