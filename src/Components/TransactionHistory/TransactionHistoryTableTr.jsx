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

TransactionHistoryTableTr.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
