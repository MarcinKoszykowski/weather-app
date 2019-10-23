import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import { getIcon, getWind } from 'data/functions';
import Wind from 'components/Wind/Wind';
import windIcon from 'assets/icons/wi-direction-up.svg';
import Date from 'components/Day/atoms/Date';
import Icon from 'components/Day/atoms/Icon';
import Temp from 'components/Day/molecules/Temp';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto auto auto auto;
  background-color: ${colorWithOpacity(white, 0.15)};
  margin: 10px 5px 0;
  padding-top: 10px;
  text-align: center;
  transition: margin 0.2s;

  @media screen and (max-width: 900px) {
    margin: 0 5px 10px;
  }
`;

function Day({ weather: { code }, min_temp: minTemp, max_temp: maxTemp, temp, valid_date: date, wind_dir: dir, wind_spd: speed }) {
  return (
    <Wrapper>
      <Icon src={getIcon(code)} />
      <Temp maxTemp={maxTemp} minTemp={minTemp} temp={temp} />
      <Wind day icon={windIcon} text={getWind(speed)} dir={dir} />
      <Date>{date}</Date>
    </Wrapper>
  );
}

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
