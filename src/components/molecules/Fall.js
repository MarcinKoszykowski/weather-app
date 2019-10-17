import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Unit from 'components/atoms/Unit';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
`;

const TextStyled = styled(Text)`
  @media screen and (max-width: 1400px) {
    margin-right: 8px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1100px) {
    margin-right: 5px;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    margin-right: 8px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    margin-right: 4px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 350px) {
    margin-right: 2px;
    font-size: 0.7rem;
  }
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
    <TextStyled>{text}</TextStyled>
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
