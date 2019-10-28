import styled from 'styled-components';

const Icon = styled.img`
  margin: 0 auto 10px;
  height: 180px;
  transition: height 0.2s, margin 0.2s;

  @media screen and (max-width: 1400px) {
    height: 160px;
  }
  @media screen and (max-width: 1250px) {
    height: 140px;
  }
  @media screen and (max-width: 1100px) {
    height: 120px;
  }
  @media screen and (max-width: 900px) {
    margin: 0 auto;
    height: 180px;
  }
  @media screen and (max-width: 700px) {
    height: 160px;
  }
  @media screen and (max-width: 600px) {
    height: 140px;
  }
  @media screen and (max-width: 500px) {
    height: 110px;
  }
  @media screen and (max-width: 350px) {
    height: 80px;
  }
`;

export default Icon;
