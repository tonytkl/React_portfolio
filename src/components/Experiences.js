import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import data from '../dataSource/data.json';

function Experiences() {
    const experiences = data.experiences;
    // Function to render projects from data.json
    const renderExperiences = (experiences) => {
        return experiences.map((experience) => {
            return <Col xs>
                <Card text='light'>
                    <Card.Body>
                        <Container className='d-flex'>
                            <Row>
                                <Col md={4} className="experienceContent">
                                    <a href={experience.url}><img src={require("../images/" + experience.logo)} /></a>
                                </Col>
                                <Col md={8} className="experienceContent">
                                    <Card.Title>{experience.title}</Card.Title>
                                    <Card.Subtitle className="mb-2">{experience.company}</Card.Subtitle>
                                    <hr/>
                                    <ul>
                                        {experience.jobDescription.map((job) => {
                                            return <li>{job}</li>
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        })
    };

    return <Container id="experiences" className="sections lightSection">
        <Row className='p-5'>
        <h2 className='secondaryHeader'>Experiences</h2>
            {experiences.length > 0 && renderExperiences(experiences)}
        </Row>
    </Container>
}

export default Experiences;