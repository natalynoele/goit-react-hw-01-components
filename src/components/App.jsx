import Profile from './profile/Profile';
import  Statistic  from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';


const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
    </div>
  );
};

export default App;