import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import { setIcon, setWind } from 'data/functions';
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

function Day({ code, minTemp, maxTemp, temp, date, dir, speed }) {
  return (
    <Wrapper>
      <DayIcon src={setIcon(code)} />
      <DayTemp maxTemp={maxTemp} minTemp={minTemp} temp={temp} />
      <Wind day icon={windIcon} text={setWind(speed)} dir={dir} />
      <Date date={date} />
    </Wrapper>
  );
}

Day.propTypes = {
  code: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  dir: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};

export default Day;
