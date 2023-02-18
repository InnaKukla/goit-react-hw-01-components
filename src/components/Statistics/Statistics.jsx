import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(item => (
          <li
            className="item"
            key={item.id}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            <span className="label">{item.label}</span>
            <StatPercentage>{item.percentage}</StatPercentage>
          </li>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  avatar: PropTypes.string,
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
