import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsName, StatsNumber} from './ProfileStats.styled';

export function ProfileStats({ followers, views, likes }) {  
  return (
    <StatsList>
    <StatsItem>
      <StatsName>Followers</StatsName>
      <StatsNumber>{ followers}</StatsNumber>
    </StatsItem>
      
    <StatsItem>
      <StatsName>Views</StatsName>
      <StatsNumber>{ views}</StatsNumber>
    </StatsItem>
      
    <StatsItem>
      <StatsName>Likes</StatsName>
      <StatsNumber>{ likes}</StatsNumber>
    </StatsItem>
  </StatsList>
  )
}

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}