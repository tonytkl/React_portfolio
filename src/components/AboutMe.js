import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import data from "../dataSource/data.json";

function AboutMe() {
  var aboutMe = data.aboutMe;
  return (
    <Container className="lightSection sections" id="aboutMe">
      <Row className="p-5">
        <h2 className="secondaryHeader">About me</h2>
        <p>{aboutMe.text}</p>
        <div>
          {aboutMe.link.map((link) => {
            if (link.name == "linkedin")
              return (
                <a href={link.url} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              );
            else if (link.name == "github")
              return (
                <a href={link.url} target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
              );
            else if (link.name == "twitter")
              return (
                <a href={link.url} target="_blank">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
              );
            else if (link.name == "instagram")
              return (
                <a href={link.url} target="_blank">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              );
            else if (link.name == "twitch")
              return (
                <a href={link.url} target="_blank">
                  <FontAwesomeIcon icon={faTwitch} className="icon" />
                </a>
              );
          })}
        </div>
      </Row>
    </Container>
  );
}

export default AboutMe;
