import styled, { css } from 'styled-components';
import { white, red, blue } from 'styled/colors';

const DayTempText = styled.p`
  font-size: 1rem;
  color: ${({ tempMax }) => (tempMax ? red : blue)};
  font-weight: 600;
  transition: font-size 0.2s;

  @media screen and (max-width: 1500px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1100px) {
    font-size: 0.65rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.65rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.5rem;
  }

  ${({ main }) =>
    main &&
    css`
      font-size: 2rem;
      color: ${white};
      margin-right: 15px;
      font-weight: 400;
      transition: margin 0.2s, font-size 0.2s;

      @media screen and (max-width: 1500px) {
        font-size: 1.8rem;
      }
      @media screen and (max-width: 1400px) {
        font-size: 1.6rem;
        margin-right: 10px;
      }
      @media screen and (max-width: 1250px) {
        font-size: 1.4rem;
      }
      @media screen and (max-width: 1100px) {
        font-size: 1.3rem;
      }
      @media screen and (max-width: 900px) {
        font-size: 2rem;
        margin-right: 15px;
      }
      @media screen and (max-width: 700px) {
        font-size: 1.6rem;
        margin-right: 10px;
      }
      @media screen and (max-width: 600px) {
        font-size: 1.4rem;
      }
      @media screen and (max-width: 500px) {
        margin-right: 5px;
        font-size: 1.1rem;
      }
      @media screen and (max-width: 350px) {
        font-size: 0.9rem;
      }
    `}
`;

export default DayTempText;
