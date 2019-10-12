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

const Element = ({ text, icon }) => (
  <Wrapper>
    <Text>{text}</Text>
    <Icon src={icon} />
  </Wrapper>
);

Element.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Element;
