import styled from 'styled-components';

export const ListItem = styled.li`
  border: 1px solid rgba(209, 206, 203, 0.718);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  padding: 20px;
`;

const colorStatus = {
  true: 'green',
  false: 'red',
};

const defaultColor = 'yellow';

export const ItemStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => colorStatus[props.$level] || defaultColor};
`;
