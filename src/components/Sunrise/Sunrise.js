import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './atoms/Title';
import Time from './atoms/Time';
import Icon from './atoms/Icon';

const Wrapper = styled.div`
  margin: 0 auto 10px;
`;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Sunrise = ({ title, icon, time }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Box>
      <Icon src={icon} />
      <Time>{time}</Time>
    </Box>
  </Wrapper>
);

Sunrise.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Sunrise;
