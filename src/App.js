import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'reactstrap';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
  return (
    <div>
      <div>
        <div className="backgroundMajor">

          <div className="backgroundClip"> </div>
        </div>
        <div className="nameInfo">Hey, I'm Mukul</div>
        <div className="introInfo">
        
        <Container>
          <Row>
          <Col sm="6">add Who you are ? </Col>
          <Col sm="6">add What you do currently ?</Col>
          </Row>
        </Container>

        </div>

        <div className="bottomNav">
          <Container>
        <Row>
          <Col>Skills</Col>
          <Col>TimeLine</Col>
          <Col>Interests</Col>
          <Col>Contact</Col>
        </Row>
         </Container>
        </div>
        
      </div>
      <div className="skillsInfo">
<div className="skillsTitle">Skills</div>
<div className="skillsDetails">Details About Skills</div>

      </div>

      <div className="skillsInfo">
<div className="skillsTitle">TimeLine</div>
<div className="skillsDetails">Create a TimeLine Component here...</div>

      </div>
      <div className="skillsInfo">
<div className="skillsTitle">Interests</div>
<div className="skillsDetails">Add some of your hobbies , the books you have read or some future plans you have got.</div>

      </div>

      <div className="skillsInfo">
<div className="skillsTitle">Contact</div>
<div className="skillsDetails">Say Hi , let's discuss the idea you have got :)</div>

      </div>
    </div>

  
  );
  }
}
