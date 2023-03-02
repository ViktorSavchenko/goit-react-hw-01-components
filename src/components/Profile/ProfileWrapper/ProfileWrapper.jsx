import PropTypes from 'prop-types';
import { ProfileContainer, AvatarWrapper, AvatarPhoto, UserName, UserTag, UserLocation, StatsList, StatsItem, StatsName, StatsNumber } from './ProfileWrapper.styled';

export function ProfileWrapper({ avatar, location, followers, views, likes, tag, username }) {
  
  return (
  <ProfileContainer>
    <AvatarWrapper>
      <AvatarPhoto
        src={avatar}
        alt={username}
      />
      <UserName>{username}</UserName>
      <UserTag>@{ tag}</UserTag>
      <UserLocation>{ location}</UserLocation>
    </AvatarWrapper>

    <StatsList>
      <StatsItem>
        <StatsName>Followers</StatsName>
        <StatsNumber>{followers}</StatsNumber>
      </StatsItem>
        
      <StatsItem>
        <StatsName>Views</StatsName>
        <StatsNumber>{views }</StatsNumber>
      </StatsItem>
        
      <StatsItem>
        <StatsName>Likes</StatsName>
        <StatsNumber>{ likes}</StatsNumber>
      </StatsItem>
    </StatsList>
</ProfileContainer>
  );
};

ProfileWrapper.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};