import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistoryTableTr = ({ data }) => {
  const { type, amount, currency } = data;
  return (
    <tr className={s.string}>
      <td className={s.stringСell}>{type}</td>
      <td className={s.stringСell}>{amount}</td>
      <td className={s.stringСell}>{currency}</td>
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
