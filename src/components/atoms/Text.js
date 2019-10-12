import styled from 'styled-components';
import { light } from 'styled/colors';

const Text = styled.p`
  font-size: 1.6rem;
  color: ${light};
  letter-spacing: 2px;
  margin-right: 10px;
  transition: font-size 0.2s;

  @media screen and (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.1rem;
    margin-right: 5px;
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
    margin-right: 0;
    font-size: 0.9rem;
  }
`;

export default Text;
