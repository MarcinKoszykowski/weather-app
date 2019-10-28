import styled from 'styled-components';
import { light } from 'styled/colors';

const Text = styled.p`
  font-size: 1.6rem;
  color: ${light};
  letter-spacing: 1px;
  margin-right: 10px;
  transition: font-size 0.2s, margin 0.2s;

  @media screen and (max-width: 1400px) {
    margin-right: 8px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1100px) {
    margin-right: 5px;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    margin-right: 8px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    margin-right: 4px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 350px) {
    margin-right: 2px;
    font-size: 0.7rem;
  }
`;
export default Text;
