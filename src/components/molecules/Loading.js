import React from 'react';
import styled from 'styled-components';
import LoadingIcon from 'components/atoms/LoadingIcon';
import cloudyIcon from 'assets/icons/wi-cloudy.svg';
import rainIcon from 'assets/icons/wi-rain.svg';
import snowIcon from 'assets/icons/wi-snow.svg';
import stormIcon from 'assets/icons/wi-thunderstorm.svg';
import { loadingAnimation, opacityZeroToOne } from 'styled/animations';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3vh;
  animation: ${opacityZeroToOne} 0.5s ease 0.5s backwards;
`;

const RainIcon = styled(LoadingIcon)`
  animation: ${loadingAnimation} 2s ease-in-out backwards infinite;
`;

const CludyIcon = styled(RainIcon)`
  animation-delay: 0.25s;
`;

const SnowIcon = styled(RainIcon)`
  animation-delay: 0.5s;
`;

const StormIcon = styled(RainIcon)`
  animation-delay: 0.75s;
`;

const Loading = () => (
  <Wrapper>
    <RainIcon src={rainIcon} />
    <CludyIcon src={cloudyIcon} />
    <SnowIcon src={snowIcon} />
    <StormIcon src={stormIcon} />
  </Wrapper>
);

export default Loading;
