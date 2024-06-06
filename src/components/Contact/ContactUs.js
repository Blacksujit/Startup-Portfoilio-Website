import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Particle from "../Particle";
import "./ContactUs.css";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function ContactUs() {
  const [location, setLocation] = useState(center);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <Container fluid className="contact-section">
        <Particle />
        <Row className="contact-header" style={{ justifyContent: "center", position: "relative" }}>
          <h2>Contact Us</h2>
        </Row>
        <Row className="contact-content">
          <Col md={6} className="contact-form">
            <h3>Get in Touch</h3>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="endurifysolutions@gmail.com" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-map">
            <h3>Our Location</h3>
            <LoadScript googleMapsApiKey="AIzaSyDD5QZmenmoFygBQLso-HjrRQgr_-_G7_4">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={location}
                zoom={14}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/mayuresh.khole.94"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/mayuresh-khole/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mayuresh-khole/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
