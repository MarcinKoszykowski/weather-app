import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import countries from 'data/countries';
import { colorWithOpacity, white } from 'styled/colors';
import Left from 'components/Columns/Left';
import Center from 'components/Columns/Center';
import Right from 'components/Columns/Right';
import City from 'components/Main/City';
import Country from 'components/Main/Country';

const Box = styled.div`
  background-color: ${colorWithOpacity(white, 0.15)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 10px 0 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: margin 0.2s, width 0.2s;

  @media screen and (max-width: 1250px) {
    margin: 10px 0 0 20px;
  }
  @media screen and (max-width: 900px) {
    width: 625px;
    margin: 0 auto 10px;
  }
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

const DailyTemplate = () => {
  const { current } = useContext(AppContext);

  return (
    <Wrapper>
      <City>{current.city_name}</City>
      <Country>{countries[current.country_code]}</Country>
      <Box>
        <Left />
        <Center />
        <Right />
      </Box>
    </Wrapper>
  );
};

export default DailyTemplate;
