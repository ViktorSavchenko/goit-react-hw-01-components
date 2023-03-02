import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import { ListContainer, FriendList } from './FriendListContainer.styled';

export function FriendListContainer({ items }) { 
  return (    
    <ListContainer>
      <FriendList>
        {items.map(({id, avatar, name, isOnline}) => (
          <FriendListItem key={id} avatar={avatar} name={name} typeStatus={isOnline} />)
        )}
      </FriendList>
    </ListContainer>
  )
}

FriendListContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact(({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    }))
  )
}


