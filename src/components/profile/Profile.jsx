import PropTypes from 'prop-types';
import State from '../state/State';
import { StatsList, Wrapper, UserName, Description } from './ProfileStyle';

const Profile = ({ username, avatar, tag, location, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <Wrapper>
      <div>
        <figure>
          <img src={avatar} alt="User avatar" />
        </figure>
        <UserName>{username}</UserName>
        <Description>@{tag}</Description>
        <Description>{location}</Description>
      </div>
      <StatsList>
        <State label="Followers" quantity={followers} />
        <State label="Views" quantity={views} />
        <State label="Likes" quantity={likes} />
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
