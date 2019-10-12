import styled from 'styled-components';
import { yellow, grey } from 'styled/colors';

const Time = styled.p`
  font-size: 2.2rem;
  letter-spacing: 2px;
  color: ${({ sun }) => (sun ? yellow : grey)};
  transition: font-size 0.2s;

  @media screen and (max-width: 1400px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export default Time;
