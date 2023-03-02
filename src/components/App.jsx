import user from './Profile/user.json'
import data from './Statistics/data.json'
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json'

import { ProfileWrapper } from './Profile/ProfileWrapper/ProfileWrapper'
import { StatisticsWrapper} from './Statistics/StatisticsWrapper/StatisticsWrapper'
import { FriendListWrapper } from './FriendList/FriendListWrapper/FriendListWrapper'
import { TransactionHistoryWrapper} from './TransactionHistory/TransactionHistoryWrapper/TransactionHistoryWrapper'

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
      <ProfileWrapper avatar={user.avatar} location={user.location} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} tag={user.tag} username={user.username} />
      
      <StatisticsWrapper title="Upload stats" stats={data} />
      
      <FriendListWrapper friends={friends} />
      
      <TransactionHistoryWrapper items={transactions} />
      
    </div>
  );
};

