import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import data from '../dataSource/data.json';

function Projects() {
    const projects = data.projects;
    // Function to render projects from data.json
    const renderProjects = (projects) => {
        return projects.map((project) => {
            return <Col md>
                <Card text='light'>
                    <Card.Img variant="top" src={require("../images/" + project.image)} className='cardImg' />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Subtitle className="mb-2">{project.subTitle}</Card.Subtitle>
                        <Card.Text>{project.text}</Card.Text>
                        {project.link.map((link) => {
                            return link.name == 'production' ?
                                <Card.Link href={link.url} target="_blank"><FontAwesomeIcon icon={faGlobe} className='icon' /></Card.Link> :
                                <Card.Link href={link.url} target="_blank"><FontAwesomeIcon icon={faGithub} className='icon' /></Card.Link>
                        })}
                    </Card.Body>
                </Card>
            </Col>
        })
    };

    return <Container id="projects">
        <Row className='p-5 justify-content-md-center'>
        <h2 className='secondaryHeader'>Projects</h2>
            {projects.length > 0 && renderProjects(projects)}
        </Row>
    </Container>
}

export default Projects;