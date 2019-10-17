import styled from 'styled-components';
import { white } from 'styled/colors';

const DateText = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
  color: ${white};
  font-size: 0.8rem;

  @media screen and (max-width: 1100px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.55rem;
  }
`;

export default DateText;
