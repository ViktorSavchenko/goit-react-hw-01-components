import PropTypes from 'prop-types';
import { ItemOfStats } from './StatisticsItem.styled';

export function StatiscticsItem({ label, percentage }) {
  return (
   <ItemOfStats type={label }>
      <span>{label}</span>
      <span>{percentage}%</span>
    </ItemOfStats>
  )
}

StatiscticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}