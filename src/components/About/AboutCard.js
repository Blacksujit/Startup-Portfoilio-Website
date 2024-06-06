import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Why Choose <span className="purple">Endurify? </span>
            from <span className="purple"> Pune  Maharashtra ,  India.</span>
            <br />
            <br />

           <p> 1.  Expertise and Experience:
<br />
With years of experience in the tech industry, our team possesses the technical prowess and industry insight to tackle even the most challenging projects.</p>

           <p> 2. Client-Centric Approach:
<br />
At Endurify, we believe in forging lasting partnerships with our clients. We listen, understand your goals, and collaborate closely to deliver solutions that exceed your expectations.</p>

           <p> 3.  Innovation at Its Core:
<br />
We stay ahead of the curve by embracing the latest technologies and trends, ensuring our solutions are not only current but also future-proof.</p>

           <p> 4.  Quality and Excellence:
<br />
Quality is non-negotiable at Endurify. Our rigorous testing and quality assurance processes guarantee that every product we deliver is of the highest standard.</p>
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Endurify Solutions</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
