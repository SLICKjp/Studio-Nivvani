import Button from "../Button/Button";
import "./connect.css";
import { Link } from "react-router-dom";


const Connect = () => {
  return (
    <div className="connect-container">
      <p className="connect-heading">Where Vision Meets Design Excellence</p>

      <p className="connect-text">
        “Let's create a space that's uniquely yours—where elegance,
        functionality, and{" "}
      </p>
      <p className="connect-subtext">
        individuality come together effortlessly"
      </p>

      <div className="connect-btn-container">
        <Link to="/contact">
          <Button name="GET IN TOUCH" />
        </Link>
      </div>
    </div>
  );
};

export default Connect;
