import PropTypes from 'prop-types';
import css from './Profile.module.css';
import State from './State';

const Profile = ({ username, avatar, tag, location, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} className={css.avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <State label="Followers" quantity={followers} />
        <State label="Views" quantity={views} />
        <State label="Likes" quantity={likes} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
