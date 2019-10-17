import React, { useContext } from 'react';
import styled from 'styled-components';
import { yellow } from 'styled/colors';
import Sun from 'components/molecules/Sun';
import AppContext from 'context';
import { setTime, setIcon } from 'data/functions';
import MainIcon from 'components/atoms/MainIcon';
import sunriseIcon from 'assets/icons/wi-sunrise.svg';
import sunsetIcon from 'assets/icons/wi-sunset.svg';
import { sun } from 'data/value';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  text-align: center;
`;

const Box = styled.div`
  color: ${yellow};
  margin: 15px 0;
  transition: margin 0.2s;

  @media screen and (max-width: 1100px) {
    margin: 10px 0;
  }
  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
  @media screen and (max-width: 350px) {
    margin: 0;
  }
`;

function LeftColumn() {
  const {
    data: { sunset_ts: sunsetTS, sunrise_ts: sunriseTS },
    current: {
      timezone,
      weather: { code },
    },
  } = useContext(AppContext);
  const { sunrise, sunset } = sun;

  return (
    <Wrapper>
      <MainIcon src={setIcon(code)} />
      <Box>
        <Sun title={sunrise} icon={sunriseIcon} time={setTime(sunriseTS, timezone)} />
        <Sun title={sunset} icon={sunsetIcon} time={setTime(sunsetTS, timezone)} />
      </Box>
    </Wrapper>
  );
}

export default LeftColumn;
