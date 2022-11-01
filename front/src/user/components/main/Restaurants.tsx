import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";

function Restaurants() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://211.188.65.107:8080/api/main/restaurants`
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
      </Row>
    </Container>
  );
}
export default Restaurants;
