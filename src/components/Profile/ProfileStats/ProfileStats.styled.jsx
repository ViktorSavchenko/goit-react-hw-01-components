import styled from '@emotion/styled'

export const StatsList = styled.ul`
display: flex;

background-color: rgb(245, 235, 245);
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;

padding: 18px; 

width: 100%;

box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.1);
`;

export const StatsName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.375;  
  
  color: #6B6B6A;
`;

export const StatsNumber = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.375;  
`;
