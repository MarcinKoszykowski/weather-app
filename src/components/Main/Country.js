import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';

const Country = styled.h1`
  background-color: ${colorWithOpacity(white, 0.15)};
  padding: 5px 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${white};
  transition: font-size 0.2s;

  @media screen and (max-width: 1400px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

export default Country;
