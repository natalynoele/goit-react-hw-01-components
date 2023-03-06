import PropTypes from 'prop-types';
import { Status } from './FriendListStyle';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <Status isActive={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
 };

export default FriendItem;
