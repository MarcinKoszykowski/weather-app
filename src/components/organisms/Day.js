import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import { getIcon, getWind } from 'data/functions';
import Wind from 'components/molecules/Wind';
import windIcon from 'assets/icons/wi-direction-up.svg';
import Date from 'components/molecules/Date';
import DayIcon from 'components/atoms/Day/DayIcon';
import DayTemp from 'components/molecules/DayTemp';

const Wrapper = styled.div`
  position: relative;
  background-color: ${colorWithOpacity(white, 0.15)};
  margin: 10px 5px 0;
  text-align: center;
  transition: margin 0.2s;

  @media screen and (max-width: 900px) {
    margin: 0 5px 10px;
  }
`;

function Day({ weather: { code }, min_temp: minTemp, max_temp: maxTemp, temp, valid_date: date, wind_dir: dir, wind_spd: speed }) {
  return (
    <Wrapper>
      <DayIcon src={getIcon(code)} />
      <DayTemp maxTemp={maxTemp} minTemp={minTemp} temp={temp} />
      <Wind day icon={windIcon} text={getWind(speed)} dir={dir} />
      <Date date={date} />
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
