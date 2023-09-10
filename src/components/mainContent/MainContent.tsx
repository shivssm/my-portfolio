import React from "react";
import "./MainContent.scss";
import Intro from "../intro/Intro";
import { Container } from "reactstrap";

const MainContent: React.FC = () => {
  return (
    <Container fluid>
      <Intro />
    </Container>
  )
}

export default MainContent;