import styled from 'styled-components';
import { red, colorWithOpacity } from 'styled/colors';

const Button = styled.button`
  cursor: pointer;
  margin-left: 20px;
  background-color: ${colorWithOpacity(red, 0.7)};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  height: 45px;
  width: 55px;
  transition: 0.2s background-color, 0.2s margin-left, 0.2s padding;

  &:hover {
    background-color: ${colorWithOpacity(red, 0.5)};
  }

  @media screen and (max-width: 450px) {
    height: 40px;
    width: 40px;
    margin-left: 10px;
  }
`;

export default Button;
