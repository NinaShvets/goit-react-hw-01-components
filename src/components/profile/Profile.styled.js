import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  border: 1px solid rgb(99, 101, 109);

  text-align: center;
  margin: 0 auto;

  background-color: white;
`;

export const TitleName = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const TextTag = styled.p`
  color: rgba(74, 73, 73, 0.718);
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid rgba(209, 206, 203, 0.718);
  width: 150px;
  margin: 20px auto;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

export const ListItem = styled.li`
  border: 1px solid rgba(209, 206, 203, 0.718);
  background-color: rgba(240, 237, 233, 0.718);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
