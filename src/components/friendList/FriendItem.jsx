import PropTypes from 'prop-types';
import { Item, Status } from './FriendListStyle';

const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      <Status isActive={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendItem;
