import styled from 'styled-components';
import { Item, Label, Quantity } from '../state/StateStyle'

const Container = styled.ul`
  list-style: none;
  display: flex;
  li {
    color: white;
    border-right: unset;
    background-color: ${getRandomHexColor()};
  }
  span {
    font-size: 1em;
    color: white;
  }
`;

const Section = styled.section`
  margin-bottom: 80px;
  text-align: center;
  background-color: white;
  box-shadow: rgb(181 181 181) 2px 3px 11px -3px;
  h2 {
    padding: 20px;
    margin-bottom: 30px;
    text-transform: uppercase;
    color: gray;
  }
 
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export { Container, Section };
