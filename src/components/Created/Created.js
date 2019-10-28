import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { created } from 'data/value';
import { opacityZeroToOne } from 'styled/animations';
import Text from './atoms/Text';
import Link from './atoms/Link';

const { href, text, link } = created;
const Wrapper = styled.div`
  text-align: center;
  padding: 10px 0 15px;
  font-size: 0.9rem;
  animation: ${opacityZeroToOne} 0.5s ease-in-out backwards;
  animation-delay: 1s;
  transition: font-size 0.2s;

  @media screen and (max-width: 850px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }

  ${({ details }) =>
    details &&
    css`
      padding: 15px 0;
      animation-delay: 0s;

      @media screen and (max-width: 900px) {
        padding: 0 0 15px;
      }
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
      }
    `}
`;

const Created = ({ details }) => (
  <Wrapper details={details}>
    <Text>{text}</Text>
    <Link rel="noopener noreferrer" target="_blank" href={href}>
      {link}
    </Link>
  </Wrapper>
);

Created.propTypes = {
  details: PropTypes.bool,
};

Created.defaultProps = {
  details: false,
};

export default Created;
