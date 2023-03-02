import data from '../data.json';
import { StatsTitle } from '../StatsTitle/StatsTitle';
import { StatsList } from '../StatsList/StatsList';
import { StatsContainer } from './StatsApp.styled';

export const StatsApp = () => {
  return (
    <StatsContainer>
    <StatsTitle title="Upload stats" />    
    
    <StatsList items={data } />
  </StatsContainer>)

};
