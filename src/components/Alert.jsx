import PropTypes from "prop-types";

const Alert = (props) => {
  const { AlertText, className } = props;

  return <span className={` ${className}`}>{AlertText}</span>;
};

Alert.propTypes = {
  AlertText: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
  className: PropTypes.string, // Add this line to accept className prop
};

export default Alert;
