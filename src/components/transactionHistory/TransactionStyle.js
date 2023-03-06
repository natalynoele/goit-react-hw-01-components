import styled from "styled-components";

const Table = styled.table`
  table-layout: fixed;
  width: 50%;
  margin-bottom: 80px;
  border-collapse: collapse;
  box-shadow: rgb(181 181 181) 2px 3px 11px -3px;

  th {
    height: 70px;
    padding: 15px;
    background-color: #36b7c1;
    text-transform: uppercase;
    color: white;
  }
  td {
    height: 80px;
    padding: 15px;
    vertical-align: center;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid #dedcdc;
    }
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export {Table}