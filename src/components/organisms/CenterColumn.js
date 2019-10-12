import React, { useContext } from 'react';
import styled from 'styled-components';
import { grey } from 'styled/colors';
import RiseAndSet from 'components/molecules/RiseAndSet';
import AppContext from 'context';
import { setTime } from 'data/functions';
import Temp from 'components/molecules/Temp';

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
  const { data, current } = useContext(AppContext);
  const { moonset_ts: moonsetTS, moonrise_ts: moonriseTS } = data;
  const { timezone } = current;
  return (
    <Wrapper>
      <Temp />
      <Box>
        <RiseAndSet time={setTime(moonriseTS, timezone)} />
        <RiseAndSet time={setTime(moonsetTS, timezone)} />
      </Box>
    </Wrapper>
  );
}

export default CenterColumn;
