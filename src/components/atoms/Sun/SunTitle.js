import styled from 'styled-components';
import { white } from 'styled/colors';

const SunTitle = styled.h1`
  color: ${white};
  font-size: 0.95rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  transition: font-size 0.2s, margin 0.2s;

  @media screen and (max-width: 1100px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 8px;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 350px) {
    margin-bottom: 8px;
    font-size: 0.6rem;
  }
`;

export default SunTitle;
