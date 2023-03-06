import State from 'components/state/State';
import { Container } from './StatisticsStyle';

const StateList = ({ stats, isPercent = true, isRandomColor = true }) => {
  return (
    <Container>
      {stats.map(({ id, label, percentage }) => (
        <State
          key={id}
          label={label}
          quantity={percentage}
          isPercent={isPercent}
          isRandomColor={isRandomColor}
        />
      ))}
    </Container>
  );
};

export default StateList;
