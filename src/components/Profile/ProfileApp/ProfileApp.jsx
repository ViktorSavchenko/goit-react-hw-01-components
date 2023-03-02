import user from '../user.json';
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar';
import { ProfileStats } from '../ProfileStats/ProfileStats';
import { ProfileContainer } from './ProfileApp.styled';

export const ProfileApp = () => {
  return (
    <ProfileContainer>
      <ProfileAvatar name={user.username} tag={user.tag} location={user.location} url={user.avatar} />
      
      <ProfileStats followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
    </ProfileContainer>
  );
};