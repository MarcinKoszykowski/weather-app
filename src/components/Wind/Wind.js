import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from 'components/Wind/atoms/Text';
import Icon from 'components/Wind/atoms/Icon';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: ${({ day }) => (day ? `5px auto auto` : `0 auto`)};
`;

const Wind = ({ day, text, icon, dir }) => (
  <Wrapper day={day}>
    <Text day={day}>{text}</Text>
    <Icon day={day} src={icon} dir={dir} />
  </Wrapper>
);

Wind.propTypes = {
  day: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dir: PropTypes.number.isRequired,
};

Wind.defaultProps = {
  day: false,
};

export default Wind;
