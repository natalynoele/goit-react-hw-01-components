import PropTypes from 'prop-types';
import css from './Profile.module.css'
import styled from 'styled-components';

const Label = styled.span`

`


const State = ({ label, quantity, className }) => {
  return (
    <li>
      <span className={css.label}>{label}</span>
      <span className={className}>{quantity}</span>
    </li>
  );
};

State.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default State;
