import React from 'react';
import './Intro.scss';
import { Container, Row, Col, Button } from 'reactstrap';
// import userPhoto from '../../assets/pics/myPic';

const Intro: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className='intro-detail'>
          {/* <img src={userPhoto} alt="user photo" /> */}
        </Col>
        <Col md={6} className='intro-detail'>
          <div className="intro-info">
            <p className="intro-name">Shiv Shankar Mistry</p>
            <p className="intro-profession">Software Engineer</p>

          </div>
          <Button className="intro-btn">
            <span className="intro-btn-text">Reach Out</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
