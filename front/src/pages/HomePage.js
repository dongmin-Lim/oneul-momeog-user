import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../enum/routes";

const Div = styled.div`
  margin-top: 5%;
  text-align: center;
`;

// const ButtonWrapper

function HomePage() {
  return (
    <Div>
      <Link to={ROUTES.USER.LOGIN}>
        <Button variant="success" className="m-2">
          오늘모먹
        </Button>
      </Link>

      <Button variant="primary">사장님</Button>
    </Div>
  );
}
export default HomePage;
