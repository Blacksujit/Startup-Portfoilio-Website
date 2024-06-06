import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import '../../Assets/avatar2.png';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import { text } from "express";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Endurify Software Solutions:<span className="purple"> Transforming Ideas into Digital Success </span> 
            </h1>
            <p className="home-about-body">
            Welcome to Endurify Software Solutions, where innovation meets excellence. We specialize in turning your visions into reality through cutting-edge technology and creative expertise. Our team of seasoned professionals is dedicated to delivering unparalleled digital solutions that empower your business to thrive in today's competitive landscape.
              <br />
              <br />
              <br />
              <h2>Success Stories</h2>
              <br />
              <b>XYZ  Retail:
                <p className="px-12px">Transformed XYZ Retail's online presence with a sleek, 
                  high-performing
                 e-commerce platform, 
                boosting their online sales by 150%.</p></b>

                <br />
            <b>ABC Healthcare:

<p>Developed a comprehensive mobile app for ABC Healthcare, improving patient engagement and streamlining appointment scheduling.
</p>
</b>
<br />
<b>
  <p>123 Logistics:
Implemented a custom software solution for 123 Logistics, resulting in a 30% increase in operational efficiency.</p></b>
<br />
<br />

</p>
<br />


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
              <br />
          <Tilt>

          <img src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162582.jpg" class="img-circle" alt="avatar2" />
          </Tilt>
              <br />
      <Tilt>
        <img src="https://img.freepik.com/premium-vector/croupier-vector-clipart-isolated-white-background_396616-781.jpg" class="img-circle" alt="avatar" />
      </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free To Reach Out <span className="purple">TO </span> Us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MayureshKhole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/mayuresh.khole.94"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mayuresh-khole/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mayuresh-khole/"
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
