import State from 'components/State';
import { Container } from './StatisticsStyle';

const StateList = ({ stats }) => {
  return (
    <Container>
      {stats.map(({ id, label, percentage }) => (
        <State key={id} label={label} quantity={percentage.toString().concat('%')} />
      ))}
    </Container>
  );
};

export default StateList;