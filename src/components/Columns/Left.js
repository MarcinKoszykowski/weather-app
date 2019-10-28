import React, { useContext } from 'react';
import styled from 'styled-components';
import { yellow } from 'styled/colors';
import AppContext from 'context';
import { getTime, getIcon } from 'data/functions';
import Icon from 'components/Main/Icon';
import sunriseIcon from 'assets/icons/wi-sunrise.svg';
import sunsetIcon from 'assets/icons/wi-sunset.svg';
import { sun } from 'data/value';
import Sunrise from 'components/Sunrise/Sunrise';

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

const Left = () => {
  const { data, current } = useContext(AppContext);
  const { weather } = current;

  return (
    <Wrapper>
      <Icon src={getIcon(weather.code)} />
      <Box>
        <Sunrise title={sun.sunrise} icon={sunriseIcon} time={getTime(data.sunrise_ts, current.timezone)} />
        <Sunrise title={sun.sunset} icon={sunsetIcon} time={getTime(data.sunset_ts, current.timezone)} />
      </Box>
    </Wrapper>
  );
};

export default Left;
