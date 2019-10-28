import styled from 'styled-components';
import { white } from 'styled/colors';
import { titleAnimation } from 'styled/animations';

const Title = styled.h1`
  margin-bottom: 10vh;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 5px;
  font-weight: 500;
  color: ${white};
  animation: ${titleAnimation} 1s ease-in-out 0.5s backwards;
  transition: 0.2s font-size, 0.2s margin-bottom;

  @media screen and (max-width: 850px) {
    margin-bottom: 7vh;
    font-size: 3.4rem;
  }
  @media screen and (max-width: 650px) {
    margin-bottom: 5vh;
    font-size: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 2.2rem;
  }
`;

export default Title;
