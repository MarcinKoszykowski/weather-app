import styled, { css } from 'styled-components';
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

  ${({ open }) =>
    open &&
    css`
      @media screen and (max-width: 1450px) {
        width: 500px;
      }
      @media screen and (max-width: 1250px) {
        width: 375px;
      }
      @media screen and (max-width: 900px) {
        width: 550px;
      }
      @media screen and (max-width: 700px) {
        width: 75vw;
      }
    `}
`;

export default Input;
