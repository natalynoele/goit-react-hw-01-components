import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;
  & > li {
    color: red;
  }
`;

const Section = styled.section`
  h2 {
  }
`;

export { Container, Section };
