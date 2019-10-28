import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Unit from '../atoms/Unit';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
`;

const Box = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-right: 10px;
  transition: margin-right 0.2s;

  @media screen and (max-width: 600px) {
    margin-right: 5px;
  }
  @media screen and (max-width: 500px) {
    margin-right: 2px;
  }
`;

const Fall = ({ text, icon }) => (
  <Wrapper>
    <Text>{text}</Text>
    <Box>
      <Unit top>mm</Unit>
      <Unit>hr</Unit>
    </Box>
    <Icon src={icon} />
  </Wrapper>
);

Fall.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Fall;
