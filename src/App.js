import "./App.css";
import Profile from "./Components/Profile/Profile.jsx";
import user from "./data/user.json";
import data from "./data/data.json";
import Statistics from "./Components/Statistics/Statistics.jsx";
import FriendList from "./Components/FriendList/FriendList.jsx";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory.jsx";
import { ContainerStyled } from "./Components/Shared/Container.styled";

function App() {
  return (
    <ContainerStyled>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </ContainerStyled>
  );
}

export default App;
