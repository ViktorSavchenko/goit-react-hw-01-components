import styled from '@emotion/styled'

export const ItemOfStats = styled.li`
display: flex;
flex-direction: column;
align-items: center;

padding: 12px;

width: 100%;

span {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.375; 
  
  color: #fff;
}  
  
background-color: ${({type}) => {
  switch (type) {
    case '.pdf':
      return getRandomHexColor();
    case '.docx':
      return getRandomHexColor();
    case '.mp3':
      return getRandomHexColor();
    case '.psd':
      return getRandomHexColor();
    default:
      return '#000';
  }
 } 
  
}
`;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

