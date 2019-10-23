import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getTemp } from 'data/functions';
import Text from 'components/Day/atoms/Text';

const Wrapper = styled.div`
  display: inline-flexbox;
  align-items: center;
  margin: 5px auto auto;
`;

const Box = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Temp = ({ minTemp, maxTemp, temp }) => (
  <Wrapper>
    <Text main>{getTemp(temp)}</Text>
    <Box>
      <Text tempMax>{getTemp(maxTemp)}</Text>
      <Text>{getTemp(minTemp)}</Text>
    </Box>
  </Wrapper>
);

Temp.propTypes = {
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
};

export default Temp;
