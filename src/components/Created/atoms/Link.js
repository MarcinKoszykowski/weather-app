import styled from 'styled-components';
import { blue, red } from 'styled/colors';

const Link = styled.a`
  color: ${blue};
  transition: color 0.3s ease;

  &:hover {
    color: ${red};
    text-decoration: none;
  }
`;

export default Link;
