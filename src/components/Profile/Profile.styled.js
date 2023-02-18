import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  margin-right: 15px;
  margin-left: 15px;
  text-align: center;
  border: 1px solid #f8f8ff;
  border-radius: 7px;
  box-shadow: 2px -1px 8px 0px #f8f8ff;
`;

export const ProfileDescription = styled.div`
  padding: 15px;
`;
export const ProfileAvatar = styled.img`
  width: 120px;
  border-radius: 100px;
  margin-top: 10px;
`;

export const ProfileName = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ProfileTag = styled.p`
  font-family: 'comic sans ms';
  color: darkgray;
  font-size: 27px;
`;

export const ProfileLocation = styled.p`
  /* font-family: 'comic sans ms'; */
  color: darkgray;
  font-size: 28px;
  margin-bottom: 30px;
  margin-top: 5px;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  li {
    width: 60px;
    display: inline-grid;
    padding: 30px 20px;
    justify-content: center;
    border-top: 1px solid #f8f8ff;
    background-color: #f8f8ff;

    :not(:last-child) {
      border-right: 1px solid #f5f5f5;
    }
  }
`;
export const StatsListLabel = styled.span`
  font-size: 20px;
  color: darkgray;
`;

export const StatsQuantity = styled.span`
  font-size: 25px;
`;
