import styled from 'styled-components';
import { white, colorWithOpacity } from 'styled/colors';

const Input = styled.input`
  background-color: transparent;
  border: 1px ${white} solid;
  color: ${colorWithOpacity(white, 0.8)};
  width: 600px;
  min-width: 250px;
  height: 45px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  transition: 0.2s width, 0.2s height;

  &::placeholder {
    letter-spacing: 5px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colorWithOpacity(white, 0.5)};
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    width: 70vw;
  }
  @media screen and (max-width: 450px) {
    height: 40px;
  }
`;

export default Input;
