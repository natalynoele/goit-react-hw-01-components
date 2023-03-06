import PropTypes from 'prop-types';
import { Item, Label, Quantity } from './state/StateStyle';

const State = ({ label, quantity, isPercent=false, isRandomColor=false}) => {
  return (
    <Item isRandomColor={isRandomColor}>
      <Label>{label}</Label>
      <Quantity>
        {quantity}
        {isPercent ? '%' : ''}
      </Quantity>
    </Item>
  );
};

State.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  isPercent: PropTypes.bool,
  isRandomColor: PropTypes.bool,
};

export default State;
