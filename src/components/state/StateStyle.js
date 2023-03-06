import styled from 'styled-components';

const Item = styled.li`
  width: calc(100% / 3 - 20px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border-right: 1px solid;
  &:last-child {
    border-right: unset;
  }
  background-color: ${({ isRandomColor }) =>
   ( isRandomColor ? getRandomHexColor() : 'transparent')};
`;

const Label = styled.span`
  font-size: 1.2em;  
  margin-bottom: 10px;
`;

const Quantity = styled.span`
font-size: 1.5em;
font-weight: 700;
color: black;
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export {Item, Label, Quantity}