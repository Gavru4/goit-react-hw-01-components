import PropTypes from "prop-types";

const FriendListItem = ({ friends }) => {
  return (
    <li className="item">
      <span className="status">{friends.isOnline}</span>
      <img
        className="avatar"
        src={friends.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friends.name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
