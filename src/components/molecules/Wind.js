import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Icon from 'components/atoms/Icon';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
`;

const StyledText = styled(Text)`
  font-size: ${({ day }) => (day ? `1.5rem` : `1.6rem`)};
  letter-spacing: ${({ day }) => (day ? null : '2px')};

  @media screen and (max-width: 1400px) {
    font-size: ${({ day }) => (day ? `1.3rem` : `1.4rem`)};
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
    margin-right: 5px;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: ${({ day }) => (day ? `1.5rem` : `1.6rem`)};
    margin-right: 10px;
  }
  @media screen and (max-width: 700px) {
    font-size: ${({ day }) => (day ? `1.3rem` : `1.4rem`)};
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin-right: 5px;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.7rem;
  }
`;

const StyledIcon = styled(Icon)`
  height: ${({ day }) => (day ? `50px` : `60px`)};
  transform: ${({ dir }) => `rotate(${dir}deg)`};
  transform-origin: 50% 50%;

  @media screen and (max-width: 1400px) {
    height: ${({ day }) => (day ? `40px` : `50px`)};
  }
  @media screen and (max-width: 1250px) {
    height: ${({ day }) => (day ? `30px` : `35px`)};
  }
  @media screen and (max-width: 900px) {
    height: ${({ day }) => (day ? `50px` : `60px`)};
  }
  @media screen and (max-width: 700px) {
    height: ${({ day }) => (day ? `40px` : `50px`)};
  }
  @media screen and (max-width: 600px) {
    height: ${({ day }) => (day ? `30px` : `35px`)};
  }
`;

const Wind = ({ text, icon, dir }) => (
  <Wrapper>
    <StyledText>{text}</StyledText>
    <StyledIcon src={icon} dir={dir} />
  </Wrapper>
);

Wind.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired,
};

export default Wind;
