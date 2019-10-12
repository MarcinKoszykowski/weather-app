import styled from 'styled-components';
import { light } from 'styled/colors';

const Unit = styled.p`
  font-size: 0.8rem;
  color: ${light};
  border-bottom: ${({ top }) => (top ? `1px solid` : null)};
  border-bottom-color: ${light};

  @media screen and (max-width: 1400px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1100px) {
    font-size: 0.65rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.4rem;
  }
`;

export default Unit;
