import styled from 'styled-components';
import { white } from 'styled/colors';
import { titleAnimation } from 'styled/animations';

const Title = styled.a`
  margin: 0;
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 5px;
  color: ${white};
  animation: ${titleAnimation} 1s ease-in-out 0.5s backwards;
  transition: 0.2s font-size;

  @media screen and (max-width: 1450px) {
    font-size: 3.6rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: 1150px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default Title;
