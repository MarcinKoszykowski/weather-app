import styled from 'styled-components';

const Icon = styled.img`
  height: 150px;
  animation: 2s ease-in-out 0.5s backwards infinite;
  transition: 0.2s height;

  @media screen and (max-width: 500px) {
    height: 100px;
  }
`;

export default Icon;
