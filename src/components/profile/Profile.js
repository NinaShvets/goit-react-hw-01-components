import { Wrapper, TitleName, TextTag } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <img src={avatar} alt="User avatar" width={180} />
      <TitleName> {username}</TitleName>
      <TextTag> @{tag}</TextTag>
      <p> {location}</p>
      <ul>
        <li>
          <span class="label">Followers</span>
          <span> {stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span> {stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span> {stats.likes}</span>
        </li>
      </ul>
    </Wrapper>
  );
};
