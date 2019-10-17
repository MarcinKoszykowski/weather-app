import styled from 'styled-components';
import { white } from 'styled/colors';

const ErrorText = styled.p`
  font-size: 2rem;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${white};
  transition: 0.2s font-size;

  @media screen and (max-width: 650px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export default ErrorText;
