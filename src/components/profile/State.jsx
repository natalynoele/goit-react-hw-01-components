import PropTypes from 'prop-types';
import css from './Profile.module.css'

const State = ({ label, quantity }) => {
  return (
    <li>
      <span className={css.label}>{label}</span>
      <span className={css.quantity}>{quantity}</span>
    </li>
  );
};

State.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default State;
