import "../../data/friends.json";
import FriendListItem from "../FriendList/FriendListItem";
import s from "./FriendList.module.css";

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
