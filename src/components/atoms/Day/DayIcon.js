import styled from 'styled-components';

const DayIcon = styled.img`
  display: block;
  height: 110px;
  margin: 10px auto;
  transition: height 0.2s, margin 0.2s;

  @media screen and (max-width: 1250px) {
    height: 100px;
  }
  @media screen and (max-width: 1100px) {
    height: 90px;
  }
  @media screen and (max-width: 900px) {
    height: 110px;
  }
  @media screen and (max-width: 700px) {
    margin: 5px auto;
    height: 100px;
  }
  @media screen and (max-width: 600px) {
    height: 90px;
  }
  @media screen and (max-width: 500px) {
    height: 70px;
  }
  @media screen and (max-width: 350px) {
    height: 55px;
  }
`;

export default DayIcon;
