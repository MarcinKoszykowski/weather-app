import React from 'react';
import styled from 'styled-components';
import { opacityZeroToOne } from 'styled/animations';
import RainIcon from './molecules/RainIcon';
import CludyIcon from './molecules/CloudyIcon';
import SnowIcon from './molecules/SnowIcon';
import StormIcon from './molecules/StormIcon';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  animation: ${opacityZeroToOne} 0.5s ease 0.5s backwards;
`;

const Loading = () => (
  <Wrapper>
    <RainIcon />
    <CludyIcon />
    <StormIcon />
    <SnowIcon />
  </Wrapper>
);

export default Loading;
