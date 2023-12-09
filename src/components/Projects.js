import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import taskSnap from '../images/taskSnap.png';

function Projects() {
    return <Container id="projects">
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={taskSnap} />
                    <Card.Body>
                        <Card.Title>TaskSnap</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Simple to-do app</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="https://react-task-snap.vercel.app/" target="_blank"><FontAwesomeIcon icon={faGlobe} className='icon' /></Card.Link>
                        <Card.Link href="https://github.com/tonytkl/React_taskSnap" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon' /></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
}

export default Projects;