import profileImg from '../images/profile.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import resume from '../document/Resume_SoftwareDeveloper.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
    return <div>
        <Container>
            <Row id='home' className='p-4 align-items-center'>
                <Col md={6} lg={5} className='p-2'>
                    <a href="https://www.flaticon.com/authors/amethystdesign" title="AmethystDesign"><img id="mainImg" src={profileImg} /></a>
                </Col>
                <Col md={6} lg={7} className='p-4'>
                    <h1 id="mainHeader">Hi, I'm <span className='highlight'>Tony</span></h1>
                    <h2 className='secondaryHeader'>I'm a software developer</h2>
                    <div className='centerButton'>
                        <Button variant="light" href={resume} download="Resume_Tony">Resume</Button>
                        <Button variant="secondary">Projects</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className='lightSection'>
            <Row id='aboutMe' className='p-5'>
                <h2 className='secondaryHeader'>About me</h2>
                <p>My name is Tony Klinpon. I am a computer programming student at Humber college. I have some specialty in front-end developing using ReactJS and would love to explore in the back-end programming as well. I also have professional experience on data warehouse and ETL management.</p>
                <div>
                    <a href="https://www.linkedin.com/in/tony-klinpon/"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                    <a href="https://www.github.com/tonytkl"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                </div>
            </Row>
        </Container>
    </div>
}

export default AboutMe;