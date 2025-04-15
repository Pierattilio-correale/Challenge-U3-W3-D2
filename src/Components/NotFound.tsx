import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = function () {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center mt-5 text-white">
        <h2>404 - Articolo spaziale NON TROVATo</h2>

        <p>
          Vuoi tornare in <Link to="/">HOME</Link> ?
        </p>
        <p>
          Puoi anche utilizzare questo{" "}
          <Button
            variant="outline-primary"
            onClick={() => {
              //   location.assign("/");
              navigate("/");
            }}
          >
            Button
          </Button>
        </p>
      </div>
    </>
  );
};
export default NotFound;
