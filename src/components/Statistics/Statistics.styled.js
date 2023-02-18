import styled from 'styled-components';

export const StatisticsSection = styled.section`
  font-size: 15px;
  margin-right: 15px;
  text-align: center;
  border-radius: 7px;
  box-shadow: 1px 1px 8px 0px lightslategrey;
  width: 500px;
`;

export const StatisticsTitle = styled.h2`
  padding: 40px 15px;
  color: lightslategray;
  font-weight: 500;
  background-color: white;
  font-size: 25px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  li {
    display: inline-grid;
    padding: 20px 10px;
    width: 60px;
    color: white;
    box-shadow: -2px 1px 5px 0px lightslategrey;
  }
`;

export const StatPercentage = styled.span`
  padding-top: 3px;
  font-size: 25px;
`;
