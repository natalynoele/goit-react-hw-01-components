import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 20px;
  box-shadow: rgb(181 181 181) 2px 3px 11px -3px;
  background-color: white;
  font-size: 16px;
  div {
    max-width: 350px;
    background-color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 37px 20px;

   }
  figure {
    width: 300px;
    height: 300px;
    background-color: #f2f2f2;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-position: 0 20px;
    }
  }
`;
const Description = styled.p`
  margin-bottom: 10px;
  color: #cfcfcf;
  font-size: 1.5em;
  font-weight: 700;
  &:last-child{
    margin-bottom: unset;
  }
`;

const StatsList = styled.ul`
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
  
`;
const UserName = styled.p`
  font-size: 3em;
  font-weight: 700;
  margin: 30px 10px;
  color: black;
`;

export {Wrapper, StatsList, UserName, Description}