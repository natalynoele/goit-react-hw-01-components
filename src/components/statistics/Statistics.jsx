import PropTypes from 'prop-types';
import StateList from './StateList';
import { Section } from './StatisticsStyle';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title ? <h2>{title}</h2> : null}
      <StateList stats={stats} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
