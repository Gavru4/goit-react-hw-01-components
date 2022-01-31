import "../../data/transactions.json";
import TransactionHistoryTableTr from "../TransactionHistory/TransactionHistoryTableTr";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((el) => {
          return <TransactionHistoryTableTr key={el.id} data={el} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
