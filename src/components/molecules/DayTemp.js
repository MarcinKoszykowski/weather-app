import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setTemp } from 'data/functions';
import DayTempText from 'components/atoms/Day/DayTempText';

const Wrapper = styled.div`
  display: inline-flexbox;
  align-items: center;
  margin: 5px auto 10px;
  transition: margin;

  @media screen and (max-width: 1100px) {
    margin: 10px auto 0;
  }
  @media screen and (max-width: 500px) {
    margin: 5px auto;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const DayTemp = ({ minTemp, maxTemp, temp }) => (
  <Wrapper>
    <DayTempText main>{setTemp(temp)}</DayTempText>
    <Box>
      <DayTempText tempMax>{setTemp(maxTemp)}</DayTempText>
      <DayTempText>{setTemp(minTemp)}</DayTempText>
    </Box>
  </Wrapper>
);

DayTemp.propTypes = {
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
};

export default DayTemp;
