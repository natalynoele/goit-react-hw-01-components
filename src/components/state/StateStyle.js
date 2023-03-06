import styled from 'styled-components';

const Item = styled.li`
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px;
  width: calc(100% / 3 - 20px);
  &:last-child {
    border-right: unset;
  }
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

export {Item, Label, Quantity}