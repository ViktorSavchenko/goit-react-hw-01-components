import PropTypes from 'prop-types';
import { AvatarWrapper,  AvatarPhoto, NameText, NameTag, NameLocation} from './ProfileAvatar.styled';


export function ProfileAvatar({ name, tag, location, url }) {  
  return (
    <AvatarWrapper>
    <AvatarPhoto
      src={ url}
      alt={ name}
    />
    <NameText>{ name}</NameText>
    <NameTag>@{ tag}</NameTag>
    <NameLocation>{ location}</NameLocation>
  </AvatarWrapper>
  )  
}

ProfileAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}