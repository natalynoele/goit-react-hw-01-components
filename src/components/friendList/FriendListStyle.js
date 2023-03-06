import styled from 'styled-components';
const Item = styled.li``;
const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;
const Container = styled.ul`
  background-color: bisque;
`;
export { Item, Status, Container };