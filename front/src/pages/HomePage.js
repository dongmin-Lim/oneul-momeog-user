import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../enum/routes";

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// const ButtonWrapper

function HomePage() {
  return (
    <Div>
      <Link to={ROUTES.USER.LOGIN}>
        <Button variant="success" type="submit">
          오늘모먹
        </Button>
      </Link>
      <Link to={ROUTES.CEO.LOGIN}>
        <Button variant="primary" type="submit">
          사장님
        </Button>
      </Link>
    </Div>
  );
}
export default HomePage;
