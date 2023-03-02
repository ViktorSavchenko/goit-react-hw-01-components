import PropTypes from 'prop-types';
import { FriendItem, StatusIcon, FriendAvatar, FriendName } from './FriendListItem.styled';

export function FriendListItem({ typeStatus, name, avatar }) {
  return (
  <FriendItem>
    <StatusIcon typeStatus={typeStatus }></StatusIcon>
    <FriendAvatar  src={avatar } alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </FriendItem>
  )
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  typeStatus: PropTypes.bool.isRequired
}
