import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;
  display: flex;
  li {
    color: white;
    border-right: unset;
    
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



export { Container, Section };
