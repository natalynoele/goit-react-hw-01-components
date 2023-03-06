import PropTypes from 'prop-types';
import State from "components/State";
import StateList from './StateList';
import { Section } from './StatisticsStyle';

const Statistic = ({title, stats}) => {
  return (
    <Section>
      { title ? <h2>{title}</h2> : null}
       <StateList stats={stats} />
    </Section>
  );    
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape
  ),
};

export default Statistic;