import PropTypes from 'prop-types';

const State = ({ id, label, quantity }) => {
  return (
    <li key={id}>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  );
};

State.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default State;