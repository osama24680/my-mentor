import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MentoringRequest from "../../Component/MentoringRequest/MentoringRequest";
import SideBar from "../../Component/MentoringRequest/SideBar";
import "./MentoringRequest.css"

function MentoringRequestSection() {
  return (
    <div className="MentoringRequestSection" >

      <Container fluid >
        <Row className="justify-between">
          <Col className="col-md-3">
            <SideBar />
          </Col>
          <Col className="col-md-9 col-12">
            <MentoringRequest />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MentoringRequestSection;
