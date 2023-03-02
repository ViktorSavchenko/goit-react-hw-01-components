import PropTypes from 'prop-types';
import { TitleContainer, Title } from './StatsTitle.styled';

export function StatsTitle({ title }) {  
  return (
    <TitleContainer>{title && <Title>{ title}</Title>}</TitleContainer>
  )
}

StatsTitle.propTypes = {
  natitleme: PropTypes.string
}