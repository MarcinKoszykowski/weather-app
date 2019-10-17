import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DateText from 'components/atoms/Day/DateText';

const Wrapper = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
`;

const Date = ({ date }) => (
  <Wrapper>
    <DateText>{date}</DateText>
  </Wrapper>
);

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
