import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="text-white text-center">
            <p>All rights are reserved to Space Typesrpit ©</p>
            <p>if u wanna follow us on the socials</p>
            <div className="">
              <i className="bi bi-whatsapp text-white mx-2"></i>{" "}
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-twitter-x mx-2"></i>
              <i className="bi bi-twitch mx-2"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
