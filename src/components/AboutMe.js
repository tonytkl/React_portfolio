import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../dataSource/data.json";

function AboutMe() {
  return (
    <Container className="lightSection sections" id="aboutMe">
      <Row className="p-5">
        <h2 className="secondaryHeader">About me</h2>
        <p>
          My name is Tony Klinpon. I am a computer programming student at Humber
          college. I have some specialty in front-end developing using ReactJS
          and would love to explore in the back-end programming as well. I also
          have professional experience on data warehouse and ETL management.
        </p>
        <div>
          <a href="https://www.linkedin.com/in/tony-klinpon/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://www.github.com/tonytkl" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default AboutMe;
