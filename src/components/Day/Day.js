import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import { getIcon, getWind } from 'data/functions';
import windIcon from 'assets/icons/wi-direction-up.svg';
import Wind from 'components/Wind/Wind';
import Temp from './molecules/Temp';
import Date from './atoms/Date';
import Icon from './atoms/Icon';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(4, auto);
  background-color: ${colorWithOpacity(white, 0.15)};
  margin: 10px 5px 0;
  padding-top: 10px;
  text-align: center;
  transition: margin 0.2s;

  @media screen and (max-width: 900px) {
    margin: 0 5px 10px;
  }
`;

const Day = ({ weather, min_temp, max_temp, temp, valid_date, wind_dir, wind_spd }) => {
  return (
    <Wrapper>
      <Icon src={getIcon(weather.code)} />
      <Temp maxTemp={max_temp} minTemp={min_temp} temp={temp} />
      <Wind day icon={windIcon} text={getWind(wind_spd)} dir={wind_dir} />
      <Date>{valid_date}</Date>
    </Wrapper>
  );
};

Day.propTypes = {
  weather: PropTypes.shape({
    code: PropTypes.number.isRequired,
  }).isRequired,
  min_temp: PropTypes.number.isRequired,
  max_temp: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  valid_date: PropTypes.string.isRequired,
  wind_dir: PropTypes.number.isRequired,
  wind_spd: PropTypes.number.isRequired,
};

export default Day;
