import React from 'react';
import styled from 'styled-components';
import { bottomRightIconLoadingAnimation } from 'styled/animations';
import snowIcon from 'assets/icons/wi-snow.svg';
import Icon from '../atoms/Icon';

const StyledIcon = styled(Icon)`
  animation-name: ${bottomRightIconLoadingAnimation(`-170px`)};

  @media screen and (max-width: 500px) {
    animation-name: ${bottomRightIconLoadingAnimation(`-120px`)};
  }
`;

const SnowIcon = () => <StyledIcon src={snowIcon} />;

export default SnowIcon;
