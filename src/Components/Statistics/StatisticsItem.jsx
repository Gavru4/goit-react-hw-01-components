import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import color from "../Shared/Random.color";
const randColor = { backgroundColor: color };

const StatisticsItem = ({ stats }) => {
  return (
    <li className={s.item} style={randColor}>
      <span className={s.label}>{stats.label}</span>
      <span className={s.percentage}>{stats.percentage}%</span>
    </li>
  );
};
export default StatisticsItem;

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
