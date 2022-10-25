import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../enum/routes";

function HomePage() {
  return (
    <Button variant="outline-success" type="submit">
      <Link to={ROUTES.USER.LOGIN}>로그인</Link>
    </Button>
  );
}
export default HomePage;
