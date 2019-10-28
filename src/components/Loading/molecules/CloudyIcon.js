import React from 'react';
import styled from 'styled-components';
import { topRightIconLoadingAnimation } from 'styled/animations';
import cloudyIcon from 'assets/icons/wi-cloudy.svg';
import Icon from '../atoms/Icon';

const StyledIcon = styled(Icon)`
  animation-name: ${topRightIconLoadingAnimation(`170px`, `-170px`)};

  @media screen and (max-width: 500px) {
    animation-name: ${topRightIconLoadingAnimation(`120px`, `-120px`)};
  }
`;

const CludyIcon = () => <StyledIcon src={cloudyIcon} />;

export default CludyIcon;
