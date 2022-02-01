import "../../data/data.json";
import StatisticsItem from "./StatisticsItem";
import s from "./Statistics.module.css";

const Statistics = (props) => {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.list}>
        {stats.map((el) => {
          return <StatisticsItem key={el.id} stats={el} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
