import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ feature }) => {
  return (
    <div className="">
      <p className="flex items-center gap-3">
        <AiFillCheckCircle className="text-blue-500 "></AiFillCheckCircle> {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
