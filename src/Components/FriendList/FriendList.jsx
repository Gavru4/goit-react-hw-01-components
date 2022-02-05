import "../../data/friends.json";
import FriendListItem from "../FriendList/FriendListItem";
import s from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((el) => {
        return <FriendListItem key={el.id} friends={el} />;
      })}
    </ul>
  );
};

export default FriendsList;

// FriendsList.propTypes = {
//   friends: PropTypes.arrayOf({
//     // el: PropTypes.array.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// };
