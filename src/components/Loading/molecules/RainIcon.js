import React from 'react';
import styled from 'styled-components';
import { topLeftIconLoadingAnimation } from 'styled/animations';
import rainIcon from 'assets/icons/wi-rain.svg';
import Icon from '../atoms/Icon';

const StyledIcon = styled(Icon)`
  animation-name: ${topLeftIconLoadingAnimation(`170px`)};

  @media screen and (max-width: 500px) {
    animation-name: ${topLeftIconLoadingAnimation(`120px`)};
  }
`;

const RainIcon = () => <StyledIcon src={rainIcon} />;

export default RainIcon;
