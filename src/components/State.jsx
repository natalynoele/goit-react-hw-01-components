import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Item, Label, Quantity } from './state/StateStyle';

const State = ({ label, quantity }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
};

State.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default State;
