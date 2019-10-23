import styled, { css } from 'styled-components';

const Icon = styled.img`
  height: 60px;
  transform: ${({ dir }) => `rotate(${dir}deg)`};
  transform-origin: 50% 50%;

  @media screen and (max-width: 1400px) {
    height: 50px;
  }
  @media screen and (max-width: 1250px) {
    height: 35px;
  }
  @media screen and (max-width: 1100px) {
    height: 30px;
  }
  @media screen and (max-width: 900px) {
    height: 60px;
  }
  @media screen and (max-width: 700px) {
    height: 50px;
  }
  @media screen and (max-width: 600px) {
    height: 35px;
  }

  ${({ day }) =>
    day &&
    css`
      height: 50px;

      @media screen and (max-width: 1400px) {
        height: 40px;
      }
      @media screen and (max-width: 1250px) {
        height: 30px;
      }
      @media screen and (max-width: 900px) {
        height: 50px;
      }
      @media screen and (max-width: 700px) {
        height: 40px;
      }
      @media screen and (max-width: 600px) {
        height: 30px;
      }
    `}

  @media screen and (max-width: 500px) {
    height: 30px;
  }
  @media screen and (max-width: 350px) {
    height: 25px;
  }
`;

export default Icon;
