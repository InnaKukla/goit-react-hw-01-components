import PropTypes from 'prop-types';
import { ProfileCard, ProfileDescription, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, StatsList, StatsListLabel, StatsQuantity } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar
          src={avatar}
          alt={username}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <StatsList>
        <li>
          <StatsListLabel>Followers</StatsListLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </li>
        <li>
          <StatsListLabel>Views</StatsListLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </li>
        <li>
          <StatsListLabel>Likes</StatsListLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </li>
      </StatsList>
    </ProfileCard>
    );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}