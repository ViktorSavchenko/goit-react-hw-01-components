import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import {  FriendList } from './FriendListWrapper.styled';

export function FriendListWrapper({friends}) {
  return (
    <FriendList>
      {friends.map(({id, avatar, name, isOnline}) => (
          <FriendListItem key={id} avatar={avatar} name={name} typeStatus={isOnline} />)
        )}
    </FriendList>
  )
}
 
FriendListWrapper.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  )
}