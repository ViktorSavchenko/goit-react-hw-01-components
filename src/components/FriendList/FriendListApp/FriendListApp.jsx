import friends from '../friends'
import {FriendListContainer} from '../FriendListContainer/FriendListContainer'

export const FriendListApp = () => { 
  return (
    <FriendListContainer items={friends} />
  )
}
