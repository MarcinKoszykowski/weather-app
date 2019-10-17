import styled from 'styled-components';
import { colorWithOpacity, white, light } from 'styled/colors';

const City = styled.h1`
  background-color: ${colorWithOpacity(white, 0.15)};
  padding: 10px 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 2rem;
  font-weight: 600;
  color: ${light};
  transition: font-size 0.2s, padding 0.2s;

  @media screen and (max-width: 1400px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 1250px) {
    padding: 5px 0;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 900px) {
    padding: 10px 0;
    font-size: 2rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 600px) {
    padding: 5px 0;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.5rem;
  }
`;

export default City;
