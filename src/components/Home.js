import profileImg from '../images/profile.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import resume from '../document/Resume_SoftwareDeveloper.pdf';

function Home() {
    return <Container>
        <Row id='home' className='p-4 align-items-center'>
            <Col md={6} lg={5} className='p-2'>
                <a href="https://www.flaticon.com/authors/amethystdesign" title="AmethystDesign"><img id="mainImg" src={profileImg} /></a>
            </Col>
            <Col md={6} lg={7} className='p-4'>
                <h1 id="mainHeader">Hi, I'm <span className='highlight'>Tony</span></h1>
                <h2 className='secondaryHeader'>I'm a software developer</h2>
                <div className='centerButton'>
                    <Button variant="light" href={resume} download="Resume_Tony">Resume</Button>
                    <Button variant="secondary" href={"#projects"}>Projects</Button>
                </div>
            </Col>
        </Row>
    </Container>
}

export default Home;