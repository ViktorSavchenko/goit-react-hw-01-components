import PropTypes from 'prop-types';
import { StatsItem } from '../StatsItem/StatsItem';
import { ListOfStats } from './StatsList.styled';

export function StatsList({ items }) {  
  return (
    <ListOfStats>
      {items.map(({id, label, percentage}) => (
        <StatsItem key={id} label={label} percentage={percentage} type={label } />
    ))}
    </ListOfStats>)
}

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact(({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired
    }))
  )
}