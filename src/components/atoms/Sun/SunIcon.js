import styled from 'styled-components';

const SunIcon = styled.img`
  height: 50px;
  margin-right: 15px;
  transition: height 0.2s, margin 0.2s;

  @media screen and (max-width: 1400px) {
    margin-right: 10px;
    height: 45px;
  }
  @media screen and (max-width: 1250px) {
    height: 35px;
  }
  @media screen and (max-width: 1100px) {
    height: 30px;
  }
  @media screen and (max-width: 900px) {
    margin-right: 15px;
    height: 50px;
  }
  @media screen and (max-width: 700px) {
    margin-right: 10px;
    height: 45px;
  }
  @media screen and (max-width: 600px) {
    height: 35px;
  }
  @media screen and (max-width: 500px) {
    height: 25px;
  }
  @media screen and (max-width: 350px) {
    margin-right: 5px;
    height: 20px;
  }
`;

export default SunIcon;
