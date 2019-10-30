import React from 'react';
import styled from 'styled-components';
import { opacityZeroToOne } from 'styled/animations';
import WeatherVideo from 'assets/video/Weather.mp4';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
  animation: ${opacityZeroToOne} 0.5s ease-in backwards;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-size: cover;
`;

const Background = () => (
  <Wrapper>
    <Video preload="true" autoPlay loop muted>
      <source src={WeatherVideo} type="video/mp4" />
    </Video>
  </Wrapper>
);

export default Background;
