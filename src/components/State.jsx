import PropTypes from 'prop-types';

const State = ({ label, quantity }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  );
};

State.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default State;
