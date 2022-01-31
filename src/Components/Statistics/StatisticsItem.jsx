import PropTypes from "prop-types";

const StatisticsItem = ({ stats }) => {
    return (
        <li className="item">
        <span className="label">{stats.label}</span>
        <span className="percentage">{stats.percentage}</span>
    </li> )
}
export default StatisticsItem;

StatisticsItem.propTypes = {
    stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
    
};