import React, { useContext } from 'react';
import styled from 'styled-components';
import { grey } from 'styled/colors';
import Moon from 'components/molecules/Sun';
import AppContext from 'context';
import { setTime } from 'data/functions';
import Temp from 'components/molecules/Temp';
import { moon } from 'data/value';
import moonriseIcon from 'assets/icons/wi-moonrise.svg';
import moonsetIcon from 'assets/icons/wi-moonset.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  text-align: center;
`;

const Box = styled.div`
  color: ${grey};
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

function CenterColumn() {
  const {
    data: { moonset_ts: moonsetTS, moonrise_ts: moonriseTS },
    current: { timezone },
  } = useContext(AppContext);
  const { moonrise, moonset } = moon;

  return (
    <Wrapper>
      <Temp />
      <Box>
        <Moon title={moonrise} icon={moonriseIcon} time={setTime(moonriseTS, timezone)} />
        <Moon title={moonset} icon={moonsetIcon} time={setTime(moonsetTS, timezone)} />
      </Box>
    </Wrapper>
  );
}

export default CenterColumn;
