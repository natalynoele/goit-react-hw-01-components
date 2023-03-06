import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import {Container} from './FriendListStyle';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape
  ),
};
export default FriendList;
