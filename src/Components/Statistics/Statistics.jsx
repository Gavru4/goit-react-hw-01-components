import "../../data/data.json";
import StatisticsItem from "./StatisticsItem";

const Statistics = (props) => {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}
      <ul className="stat-list">
        {stats.map((el) => {
          return <StatisticsItem key={el.id} stats={el} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
