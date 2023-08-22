import {
  Wrapper,
  List,
  ListItem,
  TextLabel,
  Text,
  Title,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(stat => (
          <ListItem
            key={stat.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <TextLabel>{stat.label}</TextLabel>
            <Text>{stat.percentage}%</Text>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
