import PropTypes from 'prop-types';
import State from "components/State";
import { Section, Container } from './StatisticsStyle';

const StateList = ({ stats }) => {
  return (
    <Container>
      {stats.map(({ id, label, percentage }) => (
        <State key={id} label={label} quantity={percentage} />    
      ))}
    </Container>
  );
}

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