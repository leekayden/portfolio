import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World! I am <span className="purple">Kayden Lee </span>
            from <span className="purple"> Singapore</span>!
            <br />
            <br />
            I am a student who loves tech and programming, specifically
            web development. I know a variety of programming languages such as
            HTML, CSS, JavaScript, Python, C++ and C#. My most preferred web
            framework is React, and I mostly use MySQL for my databases.
            <br />
            <br />I also love volunteering as I can give back to the society.
            For example, I volunteer at Engineering Good to repair donated
            computers and distribute it to those who need it.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Studying {"("}Suprisingly{")"}
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “There are seven days in a week, and “someday” is not one of them.”{" "}
          </p>
          <footer className="blockquote-footer">Benny Lewis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
