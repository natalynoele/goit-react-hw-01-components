import styled from 'styled-components';

const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;
const Container = styled.ul`
margin-bottom: 80px;
  li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 5px 40px;
    margin: 15px 10px;
    background: white;
    box-shadow: #bbbbbb -2px 4px 10px -1px;
    

    img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      padding: 9px;
      margin: 10px;
      background: #e4e4e4;
    }
    p {
      margin: 10px;
      font-size: 1em;
    }
  }
`;
export { Status, Container };
