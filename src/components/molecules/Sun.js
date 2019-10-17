import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SunTitle from 'components/atoms/Sun/SunTitle';
import Time from 'components/atoms/Sun/Time';
import SunIcon from 'components/atoms/Sun/SunIcon';

const Wrapper = styled.div`
  margin: 0 auto 10px;
`;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Sun = ({ title, icon, time }) => (
  <Wrapper>
    <SunTitle>{title}</SunTitle>
    <Box>
      <SunIcon src={icon} />
      <Time>{time}</Time>
    </Box>
  </Wrapper>
);

Sun.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Sun;
