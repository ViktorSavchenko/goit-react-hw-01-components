import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
  margin-bottom: 40px;
  
  width: 300px;
  
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
  
  background-color: #fff;
`;

export const AvatarPhoto = styled.img`
  margin-bottom: 18px;

  width: 80px;
  
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 12px;
  
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

export const UserTag = styled.p`
  margin-bottom: 12px;
  
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #bababa;
`;

export const UserLocation = styled.p`

  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #bababa;
`;

export const StatsList = styled.ul`
  display: flex;
  
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  
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


















// export const ProfileContainer = styled.div`
// margin-bottom: 40px;

// width: 300px;

// border-radius: 3px;
// box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
// 0px 2px 1px rgba(0, 0, 0, 0.2);

// `;