/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Link = ({ route }) => {
  return (
    <li className="mr-5 text-white hover:bg-black">
      <a href={route.path}> {route.name} </a>
    </li>
  );
};

Link.PropTypes = {
    route: PropTypes.object
}

export default Link;
