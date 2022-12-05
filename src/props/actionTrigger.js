import PropTypes from "prop-types";

const actionPropTypes = {
  action: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cmd: PropTypes.string.isRequired
  }).isRequired
};

export default actionPropTypes;
