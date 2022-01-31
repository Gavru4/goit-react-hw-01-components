import "../../data/friends.json";
import FriendListItem from "../FriendList/FriendListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((el) => {
        return <FriendListItem key={el.id} friends={el} />;
      })}
    </ul>
  );
};

export default FriendsList;
