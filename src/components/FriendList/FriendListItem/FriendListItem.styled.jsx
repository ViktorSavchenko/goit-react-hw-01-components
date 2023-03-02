import styled from '@emotion/styled'

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 12px;


  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  background-color: #FFF;

:not(:last-child) {
  margin-bottom: 10px;
}
`;

export const StatusIcon = styled.span`
  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: ${({ typeStatus }) => {
    switch (typeStatus) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return '#000';
      }
    }   
  }
`;

export const FriendAvatar = styled.img`
  margin-left: 12px;

  border-radius: 6px;

  background-color: #c4c4c4;
`;

export const FriendName = styled.p`
  margin-left: 12px;
  
  font-weight: 500;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: 0.02em;
`;