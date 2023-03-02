import PropTypes from 'prop-types';
import { ItemOfStats } from './StatsItem.styled';

export function StatsItem({ label, percentage }) {  
  return (
    <ItemOfStats type={label }>
      <span>{label}</span>
      <span>{percentage}%</span>
    </ItemOfStats>)
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}