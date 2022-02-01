import "../../data/transactions.json";
import TransactionHistoryTableTr from "../TransactionHistory/TransactionHistoryTableTr";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <th className={s.tableСell}>Type</th>
          <th className={s.tableСell}>Amount</th>
          <th className={s.tableСell}>Currency</th>
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
