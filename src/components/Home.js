import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../dataSource/data.json";

function Home() {
  var home = data.home;
  return (
    <Container id="home" className="sections">
      <Row className="p-4 align-items-center">
        <Col md={6} lg={5} className="p-2">
          <a
            href="https://www.flaticon.com/authors/amethystdesign"
            title="AmethystDesign"
          >
            <img id="mainImg" src={require("../images/" + home.image)} />
          </a>
        </Col>
        <Col md={6} lg={7} className="p-4">
          <h1 id="mainHeader">
            Hi, I'm <span className="highlight">{home.name}</span>
          </h1>
          <h2 className="secondaryHeader">I'm a {home.title}</h2>
          <div className="centerButton">
            <Button
              variant="light"
              href={require("../document/" + home.resume)}
              download="Resume_Tony"
            >
              Resume
            </Button>
            <Button variant="secondary" href={"#projects"}>
              Projects
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
