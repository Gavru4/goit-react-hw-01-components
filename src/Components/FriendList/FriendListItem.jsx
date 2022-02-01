import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const isOnline = { backgroundColor: "green" };
const isOfline = { backgroundColor: "red" };

const FriendListItem = ({ friends }) => {
  return (
    <li className={s.item}>
      <span className={s.status} style={friends.isOnline ? isOnline : isOfline}>
        {friends.isOnline}
      </span>
      <img
        className={s.avatar}
        src={friends.avatar}
        alt="User avatar"
        width="70"
      />
      <p className={s.name}>{friends.name}</p>
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
