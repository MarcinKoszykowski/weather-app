import styled, { css } from 'styled-components';
import { white, red, blue } from 'styled/colors';

const TempText = styled.p`
  color: ${({ max }) => (max ? red : blue)};
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 2px;
  transition: font-size 0.2s;

  ${({ main }) =>
    main &&
    css`
      color: ${white};
      margin: 10px 0;
      font-size: 2.8rem;

      @media screen and (max-width: 1400px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 1250px) {
        font-size: 2.2rem;
      }
      @media screen and (max-width: 1100px) {
        font-size: 1.9rem;
      }
      @media screen and (max-width: 900px) {
        font-size: 2.8rem;
      }
      @media screen and (max-width: 700px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 2.1rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 350px) {
        font-size: 1rem;
      }
    `}

  @media screen and (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export default TempText;
