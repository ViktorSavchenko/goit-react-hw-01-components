import PropTypes from 'prop-types';
import { StatiscticsItem } from '../StatisticsItem/StatisticsItem'
import { ListOfStats, TitleWrapper, StatsTitle, StatsContainer} from '../StatisticsWrapper/StatisticsWrapper.styled'

export function StatisticsWrapper({ title, stats }) { 
  return (
    <StatsContainer>
      <TitleWrapper>{title && <StatsTitle>{ title}</StatsTitle>}</TitleWrapper>

      <ListOfStats>
        {stats.map((stat) => (<StatiscticsItem key={stat.id} label={stat.label} percentage={stat.percentage}></StatiscticsItem>))} 
      </ListOfStats>
    </StatsContainer>
  )  
}

StatisticsWrapper.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}