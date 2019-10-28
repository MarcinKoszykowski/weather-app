import React from 'react';
import styled from 'styled-components';
import { bottomLeftIconLoadingAnimation } from 'styled/animations';
import stormIcon from 'assets/icons/wi-thunderstorm.svg';
import Icon from '../atoms/Icon';

const StyledIcon = styled(Icon)`
  animation-name: ${bottomLeftIconLoadingAnimation(`170px`, `-170px`)};

  @media screen and (max-width: 500px) {
    animation-name: ${bottomLeftIconLoadingAnimation(`120px`, `-120px`)};
  }
`;

const StormIcon = () => <StyledIcon src={stormIcon} />;

export default StormIcon;
