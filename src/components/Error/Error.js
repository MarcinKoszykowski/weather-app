import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';
import styled, { css } from 'styled-components';
import { errorAnimation } from 'styled/animations';
import { colorWithOpacity, red } from 'styled/colors';
import { error as errorText } from 'data/value';
import Text from './atoms/Text';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
  background-color: ${colorWithOpacity(red, 0.9)};
  padding: 20px 0;
  animation: ${errorAnimation} 2s ease-in forwards;
  z-index: 1;
  transition: 0.2s padding;

  ${({ details }) =>
    details &&
    css`
      position: fixed;
      margin: 0;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    `}

  @media screen and (max-width: 450px) {
    padding: 10px 0;
  }
`;

const Error = ({ details }) => {
  const { error } = useContext(AppContext);

  return (
    error && (
      <Wrapper details={details}>
        <Text>{errorText}</Text>
      </Wrapper>
    )
  );
};

Error.propTypes = {
  details: PropTypes.bool,
};

Error.defaultProps = {
  details: false,
};

export default Error;
