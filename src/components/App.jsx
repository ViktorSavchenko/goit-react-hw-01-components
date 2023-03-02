import { ProfileApp } from './Profile/ProfileApp/ProfileApp';
import { StatsApp } from './Statistics/StatsApp/StatsApp';
import { FriendListApp } from './FriendList/FriendListApp/FriendListApp';
import {TransactionHistoryApp} from './TransactionHistory/TransactionHistoryApp/TransactionHistoryApp'

export const App = () => {
  return (
    <div
      style={{
        padding: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileApp />
      <StatsApp />
      <FriendListApp />
      <TransactionHistoryApp/>
      
    </div>
  );
};
