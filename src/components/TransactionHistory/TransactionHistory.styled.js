import styled from 'styled-components';

export const TransactionList = styled.table`
  font-size: 15px;
  margin-left: 15px;
  margin-right: 15px;
  width: 450px;
  padding: 10px 0;
  text-align: center;
  border: 1px solid #afceff59;
  border-collapse: collapse;
  box-shadow: 0px 0px 2px 1px #afceff59;

  thead tr {
    background-color: #00b0ff;
    color: white;
    font-size: 20px;
  }
  thead tr th {
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: rock salt;
  }

  tbody tr:nth-child(odd) {
    background-color: #afceff59;
  }

  tbody tr:nth-child(even) {
    background-color: #fffff0;
  }
  tbody tr td {
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: rock salt;
  }
`;
