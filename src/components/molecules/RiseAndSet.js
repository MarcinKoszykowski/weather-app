import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RiseAndSetTitle from 'components/atoms/RiseAndSet/RiseAndSetTitle';
import Time from 'components/atoms/RiseAndSet/Time';
import RiseAndSetIcon from 'components/atoms/RiseAndSet/RiseAndSetIcon';

const Wrapper = styled.div`
  margin: 0 auto 10px;
`;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
`;

const RiseAndSet = ({ title, icon, time }) => (
  <Wrapper>
    <RiseAndSetTitle>{title}</RiseAndSetTitle>
    <Box>
      <RiseAndSetIcon>{icon}</RiseAndSetIcon>
      <Time>{time}</Time>
    </Box>
  </Wrapper>
);

RiseAndSet.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default RiseAndSet;
