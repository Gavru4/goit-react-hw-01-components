import PropTypes from "prop-types";

const TransactionHistoryTableTr = ({ data }) => {
  const { type, amount, currency } = data;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryTableTr;
