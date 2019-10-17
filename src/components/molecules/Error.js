import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorWithOpacity, red } from 'styled/colors';
import { errorAnimation } from 'styled/animations';
import ErrorText from 'components/atoms/ErrorText';
import { error } from 'data/value';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  margin-top: ${({ details }) => (details ? `100px` : `50px`)};
  text-align: center;
  background-color: ${colorWithOpacity(red, 0.9)};
  padding: 20px 0;
  animation: ${errorAnimation} 2s ease-in forwards;
  z-index: 1;
  transition: 0.2s padding;

  @media screen and (max-width: 450px) {
    padding: 10px 0;
  }
`;

const Error = ({ details }) => (
  <Wrapper details={details}>
    <ErrorText>{error}</ErrorText>
  </Wrapper>
);

Error.propTypes = {
  details: PropTypes.bool,
};

Error.defaultProps = {
  details: false,
};

export default Error;
