import styled from 'styled-components'

export const StatisticsSection = styled.section`
    font-size: 20px;
    margin-right: 15px;
    text-align: center;
    border: 1px solid ;
    border-radius: 5px;
    box-shadow: 2px -1px 8px 0px blue;
`


export const StatisticsTitle = styled.h2`
    padding: 30px 15px;
    color: lightslategray;
    font-weight: 500;
    background-color: white;
`
export const StatList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

li {
    display: inline-grid;
    padding: 20px 10px;
    border: 1px solid;
    width: 50px;
    background-color: blueviolet;
    color: white;
    box-shadow: 2px -1px 8px 0px blue;
}
`