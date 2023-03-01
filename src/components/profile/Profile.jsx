export const Profile = props => {
  return (
    <div>
      <div>
        <img src={props.avatar} alt="User avatar"  />
        <p >{props.username}</p>
        <p >{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul >
        <li>
          <span >Followers</span>
          <span >{props.followers}</span>
        </li>
        <li>
          <span >Views</span>
          <span >{props.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};
