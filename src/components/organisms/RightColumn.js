import React, { useContext } from 'react';
import styled from 'styled-components';
import Element from 'components/molecules/Element';
import Wind from 'components/molecules/Wind';
import Fall from 'components/molecules/Fall';
import pressureIcon from 'assets/icons/wi-barometer.svg';
import humidityIcon from 'assets/icons/wi-humidity.svg';
import windIcon from 'assets/icons/wi-direction-up.svg';
import cloudIcon from 'assets/icons/wi-cloud.svg';
import snowIcon from 'assets/icons/wi-snowflake-cold.svg';
import rainIcon from 'assets/icons/wi-raindrop.svg';
import { setPressure, setPercent, setWind, setFloatWithAccuracy } from 'data/functions';
import AppContext from 'context';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  padding: 15px 5px;
  transition: padding 0.2s;

  @media screen and (max-width: 1100px) {
    padding: 10px 5px;
  }
  @media screen and (max-width: 700px) {
    padding: 5px;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 0;
  }
`;

function RightColumn() {
  const {
    current: { pres, rh, wind_dir: windDir, wind_spd: windSpd, clouds, precip, snow },
  } = useContext(AppContext);

  return (
    <Wrapper>
      <Element icon={pressureIcon} text={setPressure(pres)} />
      <Element icon={humidityIcon} text={setPercent(rh)} />
      <Wind icon={windIcon} text={setWind(windSpd)} dir={windDir} />
      <Element icon={cloudIcon} text={setPercent(clouds)} />
      <Fall icon={rainIcon} text={setFloatWithAccuracy(precip, 2)} />
      <Fall icon={snowIcon} text={setFloatWithAccuracy(snow, 2)} />
    </Wrapper>
  );
}

export default RightColumn;
