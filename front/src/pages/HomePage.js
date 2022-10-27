import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../enum/routes";

function HomePage() {
  return (
    <>
      <Button variant="outline-success" type="submit">
        <Link to={ROUTES.USER.LOGIN}>오늘모먹</Link>
      </Button>
      <Button variant="outline-success" type="submit">
        <Link to={ROUTES.CEO.LOGIN}>사장님</Link>
      </Button>
    </>
  );
}
export default HomePage;
