import {
  Wrapper,
  TitleName,
  TextTag,
  Avatar,
  List,
  ListItem,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <TitleName> {username}</TitleName>
      <TextTag> @{tag}</TextTag>
      <TextTag> {location}</TextTag>
      <List>
        <ListItem>
          <TextTag>Followers</TextTag>
          <TitleName> {stats.followers}</TitleName>
        </ListItem>
        <ListItem>
          <TextTag>Views</TextTag>
          <TitleName> {stats.views}</TitleName>
        </ListItem>
        <ListItem>
          <TextTag>Likes</TextTag>
          <TitleName> {stats.likes}</TitleName>
        </ListItem>
      </List>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
